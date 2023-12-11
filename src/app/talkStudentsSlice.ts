import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TalkStudentsState = string[];

const initialState: TalkStudentsState = [];

export const talkStudentsSlice = createSlice({
	name: 'talkStudents',
	initialState,
	reducers: {
		addStudentToTalk: (state, action: PayloadAction<string>) => {
			const id = action.payload;
			if (!state.includes(id)) {
				state.push(id);
			}
		},
		removeStudentFromTalk: (state, action: PayloadAction<string>) => {
			return state.filter((id) => id !== action.payload);
		},
	},
});

export const { addStudentToTalk, removeStudentFromTalk } =
	talkStudentsSlice.actions;

export default talkStudentsSlice.reducer;
