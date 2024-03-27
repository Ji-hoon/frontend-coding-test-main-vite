import styled from "styled-components";
import Range_Input from "./RangeInput";
import { COLORS, SIZES, VALUES, TYPES } from "../../global/constants";
import { TimeRangeType } from "../../global/types";

export default function TimeField({
  name,
  times,
}: {
  name: string;
  times: TimeRangeType[] | undefined;
}) {
  const isEmpty = times?.length === 0;
  console.log(name, times, isEmpty);

  return (
    <FieldContainer>
      <h4>{name}</h4>
      <TimesList>
        {times?.map((time, index) => (
          <Range_Input time={time} key={index} />
        ))}
        {isEmpty && <Range_Input isEmpty={isEmpty} />}
      </TimesList>
    </FieldContainer>
  );
}

const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${SIZES.XXS}px;
  padding: ${SIZES.SM}px ${SIZES.XXS}px;
  min-height: 74px;
  box-sizing: border-box;
  border-bottom: 1px solid ${COLORS.GRAY_01_OVERAY};

  & h4 {
    min-width: ${VALUES.FIELD_HEADING_MIN_WIDTH}px;
    text-align: left;
    margin: 0;
    align-self: flex-start;
    padding: ${SIZES.SM / 2}px 0;
  }
`;

const TimesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SIZES.XS}px;

  & > div:not(:last-child) {
    #${TYPES.ADD} {
      display: none;
    }
  }
`;
