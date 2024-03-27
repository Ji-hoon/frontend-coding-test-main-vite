import { addMinutes, format, isBefore } from "date-fns";
import { TIMES, VALUES } from "../global/constants";

export function calcNextTimes(endTime: string | undefined) {
  if (endTime === undefined)
    return { from: TIMES.DEFAULT_BEFORE, to: TIMES.DEFAULT_AFTER };

  const beforeEndTime = endTime?.split(":");
  const beforeTimeHour = parseInt(beforeEndTime[0]);
  const beforeTimeMinutes = parseInt(beforeEndTime[1]);

  const newTimeBefore = format(
    addMinutes(
      new Date(
        VALUES.DUMMY_TIME_YEAR,
        VALUES.DUMMY_TIME_MONTH,
        VALUES.DUMMY_TIME_DAY,
        beforeTimeHour,
        beforeTimeMinutes
      ),
      15
    ),
    "HH:mm"
  );
  const newTimeAfter = format(
    addMinutes(
      new Date(
        VALUES.DUMMY_TIME_YEAR,
        VALUES.DUMMY_TIME_MONTH,
        VALUES.DUMMY_TIME_DAY,
        beforeTimeHour,
        beforeTimeMinutes
      ),
      30
    ),
    "HH:mm"
  );

  return { from: newTimeBefore, to: newTimeAfter };
}

export function generateTimeOptions({
  from,
  to,
}: {
  from: string;
  to: string;
}) {
  const startTime = from.split(":");
  const startTimeHour = parseInt(startTime[0]);
  const startTimeMinutes = parseInt(startTime[1]);
  const startTimeDate = new Date(
    VALUES.DUMMY_TIME_YEAR,
    VALUES.DUMMY_TIME_MONTH,
    VALUES.DUMMY_TIME_DAY,
    startTimeHour,
    startTimeMinutes
  );

  const endTime = to.split(":");
  const endTimeHour = parseInt(endTime[0]);
  const endTimeMinutes = parseInt(endTime[1]);
  const endTimeDate = new Date(
    VALUES.DUMMY_TIME_YEAR,
    VALUES.DUMMY_TIME_MONTH,
    VALUES.DUMMY_TIME_DAY,
    endTimeHour,
    endTimeMinutes
  );

  const timeOptions = [];

  let startDate = startTimeDate;

  while (isBefore(new Date(startDate), new Date(endTimeDate))) {
    timeOptions.push(format(new Date(startDate), "HH:mm"));
    startDate = addMinutes(new Date(startDate), 15);
  }

  return timeOptions;
}
