import styled from "styled-components";
import Range_Input from "./RangeInput";
import { COLORS, SIZES, VALUES, TYPES } from "../../global/constants";
import { TimeRangeType } from "../../global/types";

export default function TimeField({
  name,
  times,
}: {
  name: string;
  times: TimeRangeType[] | [];
}) {
  const isEmpty = times?.length === 0;
  // console.log(name, times, isEmpty);

  return (
    <FieldContainer>
      <h4>{name}</h4>
      <TimesList>
        {times.length > 0 ? (
          times.map((time, index) => (
            <Range_Input
              time={time}
              key={index}
              id={index}
              day={name}
              isEmpty={isEmpty}
            />
          ))
        ) : (
          <Range_Input id={0} day={name} isEmpty={isEmpty} />
        )}
      </TimesList>
    </FieldContainer>
  );
}

const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${SIZES.XXS}px;
  padding: ${SIZES.SM}px ${SIZES.XXS}px;
  min-height: 75px;
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
