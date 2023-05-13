import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  draftOpen: false,
};

export const draftSlice = createSlice({
  name: "draft",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    openDraft: (state) => {
      state.draftOpen = true;
    },
    closeDraft: (state) => {
      state.draftOpen = false;
    },
  },
});

export const { openDraft, closeDraft } = draftSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state.
export const selectDraft = (state) => state.draft.draftOpen;

export default draftSlice.reducer;
