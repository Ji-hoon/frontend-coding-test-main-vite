import { addMinutes, format } from "date-fns";
import { TIMES } from "../global/constants";

export function calcNextTimes(endTime: string | undefined) {
  if (endTime === undefined)
    return { from: TIMES.DEFAULT_BEFORE, to: TIMES.DEFAULT_AFTER };

  const beforeEndTime = endTime?.split(":");
  const beforeTimeHour = parseInt(beforeEndTime[0]);
  const beforeTimeMinutes = parseInt(beforeEndTime[1]);

  const newTimeBefore = format(
    addMinutes(new Date(2024, 3, 27, beforeTimeHour, beforeTimeMinutes), 15),
    "HH:mm"
  );
  const newTimeAfter = format(
    addMinutes(new Date(2024, 3, 27, beforeTimeHour, beforeTimeMinutes), 30),
    "HH:mm"
  );

  return { from: newTimeBefore, to: newTimeAfter };
}
