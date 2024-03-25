import { createSlice } from "@reduxjs/toolkit";

const initialImageViewerState = {
  isViewerEnabled: false,
  imageUrl: "",
};

const imageViewerSlice = createSlice({
  name: "authentication",
  initialState: initialImageViewerState,
  reducers: {
    open(state, action) {
      state.isViewerEnabled = true;
      state.imageUrl = action.payload;
    },
    close(state) {
      state.isViewerEnabled = false;
    },
  },
});

export default imageViewerSlice.reducer;
export const imageViewerActions = imageViewerSlice.actions;
