import styled from "styled-components";
import { SIZES, TYPES } from "../../global/constants";
import { TimeRangeType } from "../../global/types";
import { useWorkingHours } from "../hooks/useWorkingHours";
import Input from "../atoms/Input";
import Button_Icontype from "../atoms/Button.icontype";
import { useDropdown } from "../hooks/useDropdown";

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
  const { clickSelectorInput } = useDropdown();

  return (
    <RangeInputWrapper>
      {!isEmpty && time && (
        <>
          <Input
            id={`${day}_${id}_${TYPES.TIME_FROM}_${time.from}`}
            defaultValue={time.from}
            isValid={time.isValid}
            onClick={(event: React.SyntheticEvent) =>
              clickSelectorInput({
                id,
                day,
                time: time.from,
                order: TYPES.TIME_FROM,
                target: event.target as Element,
              })
            }
          />
          <p>-</p>
          <Input
            id={`${day}_${id}_${TYPES.TIME_TO}_${time.to}`}
            defaultValue={time.to}
            isValid={time.isValid}
            onClick={(event: React.SyntheticEvent) =>
              clickSelectorInput({
                id,
                day,
                time: time.to,
                order: TYPES.TIME_TO,
                target: event.target as Element,
              })
            }
          />
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
  align-items: flex-start;

  & p {
    line-height: 42px;
    margin: 0;
  }
`;
