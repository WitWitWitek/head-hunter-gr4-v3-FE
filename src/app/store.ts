import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./api/apiSlice";
import { authSlice } from "./api/authSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import talkStudentsReducer from './talkStudentsSlice';

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: authSlice.reducer,
		talkStudents: talkStudentsReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: true,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export default store;
