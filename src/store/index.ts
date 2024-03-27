import { configureStore } from "@reduxjs/toolkit";
import imageViewerReducer from "./imageViewer.slice";
import workingHourReducer from "./workingHour.slice";

const store = configureStore({
  reducer: {
    viewer: imageViewerReducer,
    workingHour: workingHourReducer,
  },
});

export default store;
