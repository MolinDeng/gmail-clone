import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedEmail: null,
  draftOpen: false,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    openDraft: (state) => {
      state.draftOpen = true;
    },
    closeDraft: (state) => {
      state.draftOpen = false;
    },
    setSelectedEmail: (state, action) => {
      state.selectedEmail = action.payload;
    },
  },
});

export const { setSelectedEmail, openDraft, closeDraft } = mailSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state.
export const selectDraft = (state) => state.mail.draftOpen;
export const selectEmail = (state) => state.mail.selectedEmail;

export default mailSlice.reducer;
