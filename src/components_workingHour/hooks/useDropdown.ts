import { useDispatch, useSelector } from "react-redux";
import { workingHourActions } from "../../store/workingHour.slice";
import { StoreProps } from "../../global/types";
import { calcCurrentPosition } from "../../utils/calcImageContainer";
import { ACTIONS } from "../../global/constants";

export function useDropdown() {
  const dispatch = useDispatch();

  const { selectedTimeId, selectedDay, selectedTimeOrder } = useSelector(
    (state: StoreProps) => state.workingHour
  );
  //   console.log(selectedTime, selectedTimeOrder, selectedTimeId, selectedDay);

  const clickSelectorInput = ({
    id,
    day,
    time,
    order,
    target,
  }: {
    id: number;
    day: string;
    time: string;
    order: string;
    target: Element;
  }) => {
    const pos = calcCurrentPosition(target);
    dispatch(workingHourActions.openDropdown({ id, day, time, order, pos }));
  };

  const clickDropdownBackdrop = () => {
    dispatch(workingHourActions.closeDropdown());
  };

  const clickTimeOption = (selectedOption: Element) => {
    const selectedTimeValue = selectedOption.textContent;

    dispatch(
      workingHourActions.updateTimeRange({
        day: selectedDay,
        id: selectedTimeId,
        time: selectedTimeValue,
        order: selectedTimeOrder,
        type: ACTIONS.EDIT,
      })
    );
  };

  return { clickSelectorInput, clickDropdownBackdrop, clickTimeOption };
}
