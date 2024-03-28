import { vi } from "vitest";
import { DAYS, TIMES } from "../../global/constants";

export const mockLoaderData = vi.fn().mockReturnValue({
  result: [
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
});
