import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "userr",
	initialState: [],
	reducers: {
		addUser(state, action) {
			state.push(action.payload);
			// console.log(action.payload);
		},
		removeUser(state, action) {
			state.splice(action.payload, 1);
		},
		removeAll(state, action) {
			return [];
		},
	},
});

// console.log(userSlice.actions);
// console.log(userSlice.name);
// console.log(userSlice.reducers);

export default userSlice.reducer;

export const { addUser, removeUser, removeAll } = userSlice.actions;
