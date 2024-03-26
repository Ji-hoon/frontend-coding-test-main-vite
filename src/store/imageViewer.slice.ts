import { createSlice } from "@reduxjs/toolkit";

const initialImageViewerState = {
  isViewerEnabled: false,
  imageUrl: "",
  imageBeforePosAndSize: {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  },
  imageAfterPosAndSize: {
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
    },
    close(state) {
      state.isViewerEnabled = false;
    },
    zoomIn(state, action) {
      state.imageBeforePosAndSize = action.payload.beforePos;
      state.imageAfterPosAndSize = action.payload.afterPos;
    },
    zoomOut(state, action) {
      state.imageBeforePosAndSize = action.payload.beforePos;
      state.imageAfterPosAndSize = action.payload.afterPos;
      console.log(state);
    },
  },
});

export default imageViewerSlice.reducer;
export const imageViewerActions = imageViewerSlice.actions;
