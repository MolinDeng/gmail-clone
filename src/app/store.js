import { configureStore } from "@reduxjs/toolkit";
import draftReducer from "../features/draftSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    draft: draftReducer,
    user: userReducer,
  },
});
