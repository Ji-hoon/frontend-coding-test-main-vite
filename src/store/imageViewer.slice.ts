import { createSlice } from "@reduxjs/toolkit";

const initialImageViewerState = {
  isViewerEnabled: false,
  isScrollable: true,
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
      state.imageUrl = "";
      state.imageBeforePosAndSize = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      };
      state.imageAfterPosAndSize = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      };
    },
  },
});

export default imageViewerSlice.reducer;
export const imageViewerActions = imageViewerSlice.actions;
