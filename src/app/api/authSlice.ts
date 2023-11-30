import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type UserRole = "admin" | "student" | "hr" | null;

type AuthPayload = {
  role: UserRole;
  access_token: string;
};

interface AuthState {
  token: string | null;
  role: UserRole;
}

const initialState: AuthState = {
  token: null,
  role: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logIn: (state, action: PayloadAction<AuthPayload>) => {
      const { access_token, role } = action.payload;
      state.token = access_token;
      state.role = role;
    },
    logOut: (state) => {
      state.token = null;
      state.role = null;
    },
  },
});

export const selectCurrentToken = (state: RootState): string | null =>
  state.auth.token;
export const selectCurrentRole = (state: RootState): string | null =>
  state.auth.role;

export const { logIn, logOut } = authSlice.actions;
