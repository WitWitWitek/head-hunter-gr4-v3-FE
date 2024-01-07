import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";
import { RootState } from "../store";
import { logIn, logOut } from "./authSlice";
import { LoginResponse } from "./authApiSlice";

const QUERY_URL = "http://localhost:3001";

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: QUERY_URL,
  credentials: "include",
  mode: "cors",
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).auth;
    headers.set("Content-Type", "application/json");
    headers.set("Access-Control-Allow-Credentials", "true");
    headers.set("Access-Control-Allow-Origin", QUERY_URL);
    headers.set(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, DELETE, PATCH"
    );
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result!.error && result!.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await baseQuery(
          "/auth/refresh",
          api,
          extraOptions
        );
        if (refreshResult.data) {
          const { access_token, role, relatedEntityId } =
            refreshResult.data as LoginResponse;
          api.dispatch(logIn({ access_token, role, relatedEntityId }));
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(logOut());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  refetchOnMountOrArgChange: true,
  tagTypes: ["Student"],
  endpoints: () => ({}),
});

export default apiSlice;
