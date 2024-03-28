import { FiChevronDown, FiAlertCircle } from "react-icons/fi";
import styled from "styled-components";
import { COLORS, SIZES, VALUES } from "../../global/constants";
import { useSelector } from "react-redux";
import { StoreProps } from "../../global/types";

export default function Input({
  defaultValue,
  isValid,
  onClick,
  id,
}: {
  defaultValue: string;
  isValid: boolean;
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
    <SelectInputWrapper>
      <SelectorInputContainer>
        <SelectorInput
          id={id}
          onChange={handleOnchage}
          className={
            isDropdownOpen && id === currentDropdownId
              ? "focus"
              : !isValid && currentDropdownId
              ? "error"
              : ""
          }
          onClick={onClick}
          type="text"
          value={id === currentDropdownId ? selectedTime : defaultValue}
        />
        <FiChevronDown strokeWidth="3" />
      </SelectorInputContainer>
      {!isValid && (
        <span>
          <FiAlertCircle />
          Invalid time range
        </span>
      )}
    </SelectInputWrapper>
  );
}

const SelectInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${SIZES.XXS / 3}px;

  & span {
    display: flex;
    gap: ${SIZES.XXS / 3}px;
    white-space: nowrap;
    align-items: center;
    font-size: 14px;
    color: ${COLORS.VARIATION_RED};
  }
`;

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
    box-shadow: 0 0 0 1px ${COLORS.BRAND_DEFAULT};
  }

  &.error {
    border-color: ${COLORS.VARIATION_RED};
  }
`;
