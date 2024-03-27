import { createSlice } from "@reduxjs/toolkit";
import { ACTIONS, DAYS, TIMES, TYPES } from "../global/constants";
import { validateTimeRange } from "../utils/calcTimeOptions";

// object in array
// e.g. times: [ {from: "09:00", to: "17:00"}, {from: "17:15", to: "17:30"}, { ... } ]
// 각 from, to 값은 option의 id 값과 일치하는 아이템을 focus
const initialWorkingHourState = {
  hours: [
    {
      day: DAYS.SUN,
      times: [
        { from: TIMES.DEFAULT_BEFORE, to: TIMES.DEFAULT_AFTER, isValid: true },
      ],
    },
    {
      day: DAYS.MON,
      times: [
        { from: TIMES.DEFAULT_BEFORE, to: TIMES.DEFAULT_AFTER, isValid: true },
      ],
    },
    {
      day: DAYS.TUE,
      times: [
        { from: TIMES.DEFAULT_BEFORE, to: TIMES.DEFAULT_AFTER, isValid: true },
      ],
    },
    {
      day: DAYS.WED,
      times: [
        { from: TIMES.DEFAULT_BEFORE, to: TIMES.DEFAULT_AFTER, isValid: true },
      ],
    },
    {
      day: DAYS.THU,
      times: [
        { from: TIMES.DEFAULT_BEFORE, to: TIMES.DEFAULT_AFTER, isValid: true },
      ],
    },
    {
      day: DAYS.FRI,
      times: [
        { from: TIMES.DEFAULT_BEFORE, to: TIMES.DEFAULT_AFTER, isValid: true },
      ],
    },
    {
      day: DAYS.SAT,
      times: [
        { from: TIMES.DEFAULT_BEFORE, to: TIMES.DEFAULT_AFTER, isValid: true },
      ],
    },
  ],
  isModified: false,
  isAvailable: true,
  isSyncedWithLocalStorage: false,
  isDropdownOpen: false,
  dropdownPos: {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  },
  selectedTime: "",
  selectedTimeOrder: undefined,
  selectedTimeId: undefined,
  selectedDay: undefined,
};

const workingHourSlice = createSlice({
  name: "workingHour",
  initialState: initialWorkingHourState,
  reducers: {
    updateTimeRange(state, action) {
      const newHours = [...state.hours];
      const targetDay = newHours.filter((hour) => {
        return action.payload.day === hour.day;
      });

      if (action.payload.type === ACTIONS.DEL) {
        targetDay[0].times.splice(action.payload.id, 1);
      }
      if (action.payload.type === ACTIONS.ADD) {
        targetDay[0].times.push(action.payload.time);
      }
      if (action.payload.type === ACTIONS.EDIT) {
        const order = action.payload.order;
        const id = action.payload.id;

        if (order === TYPES.TIME_FROM) {
          targetDay[0].times[id].from = action.payload.time;
        }

        if (order === TYPES.TIME_TO) {
          targetDay[0].times[id].to = action.payload.time;
        }

        const isValidTimeRange = validateTimeRange({
          order,
          startTime: targetDay[0].times[id].from,
          endTime: targetDay[0].times[id].to,
        });
        targetDay[0].times[id].isValid = isValidTimeRange.result;
        state.isAvailable = isValidTimeRange.result;
      }

      state.hours = newHours;
      state.isModified = true;
      state.isDropdownOpen = false;
    },
    setHours(state, action) {
      const newHours = action.payload.hours;
      state.hours = newHours;
      state.isSyncedWithLocalStorage = true;
    },
    setSync(state) {
      state.isSyncedWithLocalStorage = true;
    },
    resetHours(state, action) {
      const newHours = action.payload.hours;
      state.hours = newHours;
      state.isModified = false;
    },
    resetModified(state) {
      state.isModified = false;
    },
    openDropdown(state, action) {
      state.selectedTime = action.payload.time;
      state.selectedTimeId = action.payload.id;
      state.selectedDay = action.payload.day;
      state.selectedTimeOrder = action.payload.order;
      state.dropdownPos = action.payload.pos;
      state.isDropdownOpen = true;
    },
    setDropdown(state, action) {
      state.dropdownPos = action.payload.pos;
    },
    closeDropdown(state) {
      state.selectedTime = "";
      state.isDropdownOpen = false;
    },
  },
});

export default workingHourSlice.reducer;
export const workingHourActions = workingHourSlice.actions;
