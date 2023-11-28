import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserRole = 'admin' | 'student' | 'hr' | null;

interface AuthState {
	role: UserRole;
}

const initialState: AuthState = {
	role: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setRole: (state, action: PayloadAction<UserRole>) => {
			state.role = action.payload;
		},
	},
});

export const { setRole } = authSlice.actions;

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
