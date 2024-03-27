import { addMinutes, format, isAfter, isBefore } from "date-fns";
import { TIMES, TYPES, VALUES } from "../global/constants";

export function calcNextTimes(endTime: string | undefined) {
  if (endTime === undefined)
    return { from: TIMES.DEFAULT_BEFORE, to: TIMES.DEFAULT_AFTER };

  const beforeDate = convertStrToDate(endTime);
  const newTimeBefore = format(addMinutes(beforeDate, 15), "HH:mm");
  const newTimeAfter = format(addMinutes(beforeDate, 30), "HH:mm");

  return { from: newTimeBefore, to: newTimeAfter };
}

export function generateTimeOptions({
  from,
  to,
}: {
  from: string;
  to: string;
}) {
  const startTimeDate = convertStrToDate(from);
  const endTimeDate = convertStrToDate(to);

  const timeOptions = [];

  let startDate = startTimeDate;

  while (isBefore(new Date(startDate), new Date(endTimeDate))) {
    timeOptions.push(format(new Date(startDate), "HH:mm"));
    startDate = addMinutes(new Date(startDate), 15);
  }

  return timeOptions;
}

export function validateTimeRange({
  order,
  startTime,
  endTime,
}: {
  order: string;
  startTime: string;
  endTime: string;
}) {
  const targetTimeDate = convertStrToDate(startTime);
  const targetTime = convertStrToDate(endTime);

  if (order === TYPES.TIME_FROM && isBefore(targetTimeDate, targetTime)) {
    console.log(isBefore(targetTimeDate, targetTime));
    return { result: true };
  }

  if (order === TYPES.TIME_TO && isAfter(targetTime, targetTimeDate)) {
    console.log(isAfter(targetTime, targetTimeDate));
    return { result: true };
  }

  return { result: false };
}

function convertStrToDate(str: string) {
  const timeString = str.split(":");
  const timeHour = parseInt(timeString[0]);
  const timeMinutes = parseInt(timeString[1]);
  const convertedTime = new Date(
    VALUES.DUMMY_TIME_YEAR,
    VALUES.DUMMY_TIME_MONTH,
    VALUES.DUMMY_TIME_DAY,
    timeHour,
    timeMinutes
  );

  return convertedTime;
}
