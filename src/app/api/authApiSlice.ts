import apiSlice from "../api/apiSlice";
import { UserRole, logIn, logOut } from "./authSlice";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  role: UserRole;
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: ({ email, password }) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: { email, password },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { access_token, role } = data;
          dispatch(logIn({ access_token, role }));
        } catch (err) {
          dispatch(logOut());
        }
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/sign-out",
        method: "POST",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(logOut());
      },
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApiSlice;
