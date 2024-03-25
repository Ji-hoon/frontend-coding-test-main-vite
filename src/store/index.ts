import { configureStore } from "@reduxjs/toolkit";
import imageViewerReducer from "./imageViewer.slice";

const store = configureStore({
  reducer: {
    viewer: imageViewerReducer,
  },
});

export default store;
