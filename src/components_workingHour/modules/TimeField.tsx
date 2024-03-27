import styled from "styled-components";
import Range_Input from "./RangeInput";
import { COLORS, SIZES, TYPES } from "../../global/constants";
import { TimeRangeType } from "../../global/types";

export default function TimeField({
  name,
  times,
}: {
  name: string;
  times: TimeRangeType[] | [];
}) {
  const isEmpty = times?.length === 0;

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
    width: 20vw;
    max-width: ${SIZES.FIELD_HEADING_MIN_WIDTH}px;
    flex-shrink: 1;
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
      visibility: hidden;
      pointer-events: none;
    }
  }
`;
