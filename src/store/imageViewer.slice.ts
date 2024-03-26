import { createSlice } from "@reduxjs/toolkit";

const initialImageViewerState = {
  isViewerEnabled: false,
  isScrollable: true,
  imageUrl: "",
  imageBeforePosAndSize: {
    x: undefined,
    y: undefined,
    width: undefined,
    height: undefined,
  },
  imageAfterPosAndSize: {
    x: undefined,
    y: undefined,
    width: undefined,
    height: undefined,
  },
};

const imageViewerSlice = createSlice({
  name: "imageViewer",
  initialState: initialImageViewerState,
  reducers: {
    open(state, action) {
      state.isViewerEnabled = true;
      state.isScrollable = false;
      state.imageUrl = action.payload.src;
      state.imageBeforePosAndSize = action.payload.beforePos;
    },
    close(state) {
      state.isViewerEnabled = false;
    },
    toggleZoom(state, action) {
      state.imageBeforePosAndSize = action.payload.beforePos;
      state.imageAfterPosAndSize = action.payload.afterPos;
    },
    reset(state) {
      state.isViewerEnabled = false;
      state.isScrollable = true;
      state.imageBeforePosAndSize = {
        x: undefined,
        y: undefined,
        width: undefined,
        height: undefined,
      };
      state.imageAfterPosAndSize = {
        x: undefined,
        y: undefined,
        width: undefined,
        height: undefined,
      };
    },
  },
});

export default imageViewerSlice.reducer;
export const imageViewerActions = imageViewerSlice.actions;
