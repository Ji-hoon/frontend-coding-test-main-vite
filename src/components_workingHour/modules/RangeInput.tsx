import styled from "styled-components";
import Input from "../atoms/Input";
import { ACTIONS, SIZES, TIMES, TYPES } from "../../global/constants";
import Button_Icontype from "../atoms/Button.icontype";
import { TimeRangeType } from "../../global/types";
import { useDispatch } from "react-redux";
import { workingHourActions } from "../../store/workingHour.slice";
import { calcNextTimes } from "../../utils/calcNextTimes";

export default function Range_Input({
  id,
  day,
  time,
  isEmpty,
}: {
  id: number;
  day: string;
  time?: TimeRangeType;
  isEmpty?: boolean;
}) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(
      workingHourActions.updateTimeRange({ day, id, type: ACTIONS.DEL })
    );
  };

  const handleAdd = () => {
    const newTime = isEmpty
      ? { from: TIMES.DEFAULT_BEFORE, to: TIMES.DEFAULT_AFTER }
      : calcNextTimes(time?.to);

    dispatch(
      workingHourActions.updateTimeRange({
        day,
        time: newTime,
        type: ACTIONS.ADD,
      })
    );
  };

  return (
    <RangeInputWrapper>
      {!isEmpty && (
        <>
          <Input defaultValue={time?.from} />
          -
          <Input defaultValue={time?.to} />
          &nbsp;
          <Button_Icontype onClick={handleDelete} type={TYPES.DELETE} />
        </>
      )}
      <Button_Icontype onClick={handleAdd} type={TYPES.ADD} id={TYPES.ADD} />
    </RangeInputWrapper>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
const RangeInputWrapper = styled.div`
  display: flex;
  gap: ${SIZES.XXS / 2}px;
  align-items: center;
`;
