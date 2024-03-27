import { createSlice } from "@reduxjs/toolkit";
import { ACTIONS, DAYS, TIMES } from "../global/constants";

// object in array
// e.g. times: [ {from: TIMES.DEFAULT_BEFORE, to: TIMES.DEFAULT_AFTER}, { ... } ]
// 각 from, to 값은 option의 id 값과 일치하는 아이템을 focus
const initialWorkingHourState = {
  hours: [
    {
      day: DAYS.SUN,
      times: [],
    },
    {
      day: DAYS.MON,
      times: [{ from: TIMES.DEFAULT_BEFORE, to: TIMES.DEFAULT_AFTER }],
    },
    {
      day: DAYS.TUE,
      times: [{ from: TIMES.DEFAULT_BEFORE, to: TIMES.DEFAULT_AFTER }],
    },
    {
      day: DAYS.WED,
      times: [
        { from: TIMES.DEFAULT_BEFORE, to: TIMES.DEFAULT_AFTER },
        { from: "18:00", to: "20:00" },
        { from: "21:00", to: "23:00" },
      ],
    },
    {
      day: DAYS.THU,
      times: [{ from: TIMES.DEFAULT_BEFORE, to: TIMES.DEFAULT_AFTER }],
    },
    {
      day: DAYS.FRI,
      times: [{ from: TIMES.DEFAULT_BEFORE, to: TIMES.DEFAULT_AFTER }],
    },
    {
      day: DAYS.SAT,
      times: [], //[{ from: TIMES.DEFAULT_BEFORE, to: TIMES.DEFAULT_AFTER }],
    },
  ],
  isModified: false,
};

const workingHourSlice = createSlice({
  name: "workingHour",
  initialState: initialWorkingHourState,
  reducers: {
    updateTimeRange(state, action) {
      const newHours = [...state.hours];
      const targetDay = newHours.find((hour) => {
        return action.payload.day === hour.day;
      });

      if (action.payload.type === ACTIONS.DEL) {
        targetDay?.times.splice(action.payload.id, 1);
      }
      if (action.payload.type === ACTIONS.ADD) {
        targetDay?.times.push(action.payload.time);
      }

      state.hours = newHours;
    },
    save(state) {
      state.isModified = true;
    },
  },
});

export default workingHourSlice.reducer;
export const workingHourActions = workingHourSlice.actions;
