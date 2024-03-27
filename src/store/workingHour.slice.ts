import { createSlice } from "@reduxjs/toolkit";

// object in array
// e.g. SUN: [ {from: "09:00", to: "17:00"}, { ... } ]
// 각 from, to 값은 option의 id 값과 일치하는 아이템을 focus
const initialWorkingHourState = {
  hours: {
    SUN: [],
    MON: [],
    TUE: [],
    WED: [],
    THU: [],
    FRI: [],
    SAT: [],
  },
  isModified: false,
};

const workingHourSlice = createSlice({
  name: "workingHour",
  initialState: initialWorkingHourState,
  reducers: {
    updateTimeRange(state, action) {
      state.hours = action.payload.hours;
    },
    save(state) {
      state.isModified = true;
    },
  },
});

export default workingHourSlice.reducer;
export const workingHourActions = workingHourSlice.actions;
