import styled from "styled-components";
import { SIZES, TYPES } from "../../global/constants";
import { TimeRangeType } from "../../global/types";
import { useWorkingHours } from "../hooks/useWorkingHours";
import Input from "../atoms/Input";
import Button_Icontype from "../atoms/Button.icontype";

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
  const { addTimeRange, deleteTimeRange } = useWorkingHours();

  return (
    <RangeInputWrapper>
      {!isEmpty && (
        <>
          <Input defaultValue={time?.from} />
          -
          <Input defaultValue={time?.to} />
          &nbsp;
          <Button_Icontype
            onClick={() => deleteTimeRange({ day, id })}
            type={TYPES.DELETE}
          />
        </>
      )}
      <Button_Icontype
        onClick={() => addTimeRange({ day, time, isEmpty })}
        type={TYPES.ADD}
        id={TYPES.ADD}
      />
    </RangeInputWrapper>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
const RangeInputWrapper = styled.div`
  display: flex;
  gap: ${SIZES.XXS / 2}px;
  align-items: center;
`;
