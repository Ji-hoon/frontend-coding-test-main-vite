import { createSlice } from "@reduxjs/toolkit";
import { DAYS } from "../global/constants";

// object in array
// e.g. times: [ {from: "09:00", to: "17:00"}, { ... } ]
// 각 from, to 값은 option의 id 값과 일치하는 아이템을 focus
const initialWorkingHourState = {
  hours: [
    {
      day: DAYS.SUN,
      times: [],
    },
    {
      day: DAYS.MON,
      times: [{ from: "09:00", to: "17:00" }],
    },
    {
      day: DAYS.TUE,
      times: [{ from: "09:00", to: "17:00" }],
    },
    {
      day: DAYS.WED,
      times: [
        { from: "09:00", to: "17:00" },
        { from: "18:00", to: "20:00" },
      ],
    },
    {
      day: DAYS.THU,
      times: [{ from: "09:00", to: "17:00" }],
    },
    {
      day: DAYS.FRI,
      times: [{ from: "09:00", to: "17:00" }],
    },
    {
      day: DAYS.SAT,
      times: [], //[{ from: "09:00", to: "17:00" }],
    },
  ],
  isModified: false,
};

const workingHourSlice = createSlice({
  name: "workingHour",
  initialState: initialWorkingHourState,
  reducers: {
    updateTimeRange(state, action) {
      state.hours = action.payload.hour;
    },
    save(state) {
      state.isModified = true;
    },
  },
});

export default workingHourSlice.reducer;
export const workingHourActions = workingHourSlice.actions;
