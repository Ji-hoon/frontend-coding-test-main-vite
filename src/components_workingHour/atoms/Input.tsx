import { FiChevronDown } from "react-icons/fi";
import styled from "styled-components";
import { COLORS, SIZES, VALUES } from "../../global/constants";
import { useSelector } from "react-redux";
import { StoreProps } from "../../global/types";

export default function Input({
  defaultValue,
  onClick,
  id,
}: {
  defaultValue: string;
  onClick: (e: React.SyntheticEvent) => void;
  id: string;
}) {
  const {
    selectedTime,
    selectedTimeId,
    selectedDay,
    selectedTimeOrder,
    isDropdownOpen,
  } = useSelector((state: StoreProps) => state.workingHour);
  const currentDropdownId = `${selectedDay}_${selectedTimeId}_${selectedTimeOrder}_${selectedTime}`;

  const handleOnchage = () => {
    console.log("changed");
  };

  return (
    <>
      <SelectorInputContainer>
        <SelectorInput
          id={id}
          onChange={handleOnchage}
          className={isDropdownOpen && id === currentDropdownId ? "focus" : ""}
          onClick={onClick}
          type="text"
          value={id === currentDropdownId ? selectedTime : defaultValue}
        />
        <FiChevronDown strokeWidth="3" />
      </SelectorInputContainer>
    </>
  );
}

const SelectorInputContainer = styled.div`
  position: relative;
  display: flex;
  max-width: ${SIZES.MAX_WIDTH_OPTION_INPUT}px;

  & > svg {
    position: absolute;
    right: 12px;
    top: 12px;
    pointer-events: none;
    color: ${COLORS.GRAY_05};
  }
`;

const SelectorInput = styled.input`
  width: 100%;
  display: block;
  padding: ${SIZES.LG / 2}px ${SIZES.XL / 2}px;
  background-color: ${COLORS.BASIC_WHITE};
  border: 1px solid ${COLORS.GRAY_02};
  color: ${COLORS.BASIC_BLACK};
  border-radius: 5px;
  outline: none;
  font-size: ${SIZES.SM}px;
  line-height: ${SIZES.LG}px;
  transition: all ${VALUES.ANIMATION_TIMING_SHORTER}ms ease-out;

  &:hover {
    border-color: ${COLORS.GRAY_03};
  }
  &.focus,
  &.active,
  &:focus {
    border-color: ${COLORS.BRAND_DEFAULT};
  }
`;
