import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LoginResponse } from "./authApiSlice";

export type UserRole = "admin" | "student" | "hr" | null;

type UserData = {
  email: string;
  username: string | null;
  github: string | null;
} | null;

interface AuthState {
  token: string | null;
  role: UserRole;
  relatedEntityId: string | null;
  userData: UserData;
}

const initialState: AuthState = {
  token: null,
  role: null,
  relatedEntityId: null,
  userData: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logIn: (state, action: PayloadAction<LoginResponse>) => {
      const { access_token, role, relatedEntityId, userData } = action.payload;
      state.token = access_token;
      state.role = role;
      state.relatedEntityId = relatedEntityId;
      state.userData = { ...userData };
    },
    logOut: (state) => {
      state.token = null;
      state.role = null;
      state.relatedEntityId = null;
      state.userData = null;
    },
  },
});

export const selectCurrentToken = (state: RootState): string | null =>
  state.auth.token;
export const selectCurrentRole = (state: RootState): string | null =>
  state.auth.role;
export const selectRelatedEntityId = (state: RootState): string | null =>
  state.auth.relatedEntityId;
export const selectUserData = (state: RootState): UserData =>
  state.auth.userData;

export const { logIn, logOut } = authSlice.actions;
