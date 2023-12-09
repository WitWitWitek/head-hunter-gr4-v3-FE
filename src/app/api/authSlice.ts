import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type UserRole = "admin" | "student" | "hr" | null;

type AuthPayload = {
  role: UserRole;
  access_token: string;
  relatedEntityId: string | null;
};

interface AuthState {
  token: string | null;
  role: UserRole;
  relatedEntityId: string | null;
}

const initialState: AuthState = {
  token: null,
  role: null,
  relatedEntityId: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logIn: (state, action: PayloadAction<AuthPayload>) => {
      const { access_token, role, relatedEntityId } = action.payload;
      state.token = access_token;
      state.role = role;
      state.relatedEntityId = relatedEntityId;
    },
    logOut: (state) => {
      state.token = null;
      state.role = null;
      state.relatedEntityId = null;
    },
  },
});

export const selectCurrentToken = (state: RootState): string | null =>
  state.auth.token;
export const selectCurrentRole = (state: RootState): string | null =>
  state.auth.role;
export const selectRelatedEntityId = (state: RootState): string | null =>
  state.auth.relatedEntityId;

export const { logIn, logOut } = authSlice.actions;
