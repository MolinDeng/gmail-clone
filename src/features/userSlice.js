import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  account: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.account = action.payload;
    },
    logout: (state) => {
      state.account = initialState.account;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.account;

export default userSlice.reducer;
