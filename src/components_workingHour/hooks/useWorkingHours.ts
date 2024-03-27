import { useDispatch, useSelector } from "react-redux";
import { ACTIONS, TIMES } from "../../global/constants";
import { workingHourActions } from "../../store/workingHour.slice";
import { calcNextTimes } from "../../utils/calcTimeOptions";
import { StoreProps, TimeRangeType } from "../../global/types";

export function useWorkingHours() {
  const { hours } = useSelector((state: StoreProps) => state.workingHour);
  const dispatch = useDispatch();

  const deleteTimeRange = ({ day, id }: { day: string; id: number }): void => {
    dispatch(
      workingHourActions.updateTimeRange({ day, id, type: ACTIONS.DEL })
    );
  };

  const addTimeRange = ({
    day,
    time,
    isEmpty,
  }: {
    day: string;
    time?: TimeRangeType;
    isEmpty?: boolean;
  }): void => {
    const newTime = isEmpty
      ? { from: TIMES.DEFAULT_BEFORE, to: TIMES.DEFAULT_AFTER }
      : calcNextTimes(time?.to);

    dispatch(
      workingHourActions.updateTimeRange({
        day,
        time: { ...newTime, isValid: true },
        type: ACTIONS.ADD,
      })
    );
  };

  const resetHours = (): void => {
    const currentworkingHour = localStorage.getItem("workingHour");

    if (currentworkingHour) {
      dispatch(
        workingHourActions.resetHours({ hours: JSON.parse(currentworkingHour) })
      );
    } else {
      dispatch(workingHourActions.resetModified());
    }
  };

  const updateHours = (): void => {
    localStorage.setItem("workingHour", JSON.stringify(hours));
    dispatch(workingHourActions.resetModified());
  };

  return { deleteTimeRange, addTimeRange, resetHours, updateHours };
}
