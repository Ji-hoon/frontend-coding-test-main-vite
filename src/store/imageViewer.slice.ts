import { createSlice } from "@reduxjs/toolkit";

const initialImageViewerState = {
  isViewerEnabled: false,
  imageUrl: "",
  imagePosAndSize: {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  },
};

const imageViewerSlice = createSlice({
  name: "authentication",
  initialState: initialImageViewerState,
  reducers: {
    open(state, action) {
      state.isViewerEnabled = true;
      state.imageUrl = action.payload.src;
      state.imagePosAndSize = action.payload.pos;
    },
    close(state) {
      state.isViewerEnabled = false;
    },
    zoomIn(state, action) {
      state.imagePosAndSize = action.payload.pos;
    },
    zoomOut(state, action) {
      state.imagePosAndSize = action.payload.pos;
    },
  },
});

export default imageViewerSlice.reducer;
export const imageViewerActions = imageViewerSlice.actions;
