import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/UserSlice";

const Store = configureStore({
	reducer: {
		users: userSlice,
	},
});

export default Store;
