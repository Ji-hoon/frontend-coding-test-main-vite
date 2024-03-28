import styled from "styled-components";
import { COLORS, SIZES, TIMES } from "../../global/constants";
import { BoxtypeButton } from "../atoms/Button.boxtype";
import { FiCheck } from "react-icons/fi";
import { useSelector } from "react-redux";
import { DropdownTriggerPosAndSize, StoreProps } from "../../global/types";
import { generateTimeOptions } from "../../utils/calcTimeOptions";
import { useDropdown } from "../hooks/useDropdown";
import React from "react";

export default function Dropdown_TimeOption({
  selected,
}: {
  selected: string;
}) {
  const { dropdownPos } = useSelector((state: StoreProps) => state.workingHour);
  const optionItems = generateTimeOptions({
    from: TIMES.OPTION_START,
    to: TIMES.OPTION_END,
  });
  const { clickTimeOption } = useDropdown();

  const handleOptionClick = (event: React.SyntheticEvent) => {
    const selectedOption = event.target as Element;
    clickTimeOption(selectedOption);
  };
  console.log(dropdownPos);

  return (
    <DropdownMenuListWrapper $pos={dropdownPos}>
      {optionItems.map((item, index) => {
        return (
          <OptionItems
            onClick={handleOptionClick}
            $isSelected={selected === item}
            key={index}
            autoFocus={selected === item}
          >
            {item}
            {selected === item && <FiCheck strokeWidth={4} />}
          </OptionItems>
        );
      })}
    </DropdownMenuListWrapper>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
const DropdownMenuListWrapper = styled.div<{
  $pos: DropdownTriggerPosAndSize;
}>`
  display: flex;
  flex-direction: column;
  padding: ${SIZES.XXS / 3}px 0;

  position: absolute;
  max-width: ${SIZES.MAX_WIDTH_OPTION_INPUT}px;
  box-sizing: border-box;
  border: 1px solid ${COLORS.GRAY_02_OVERAY};
  border-radius: 5px;
  z-index: 12;
  background: ${COLORS.BASIC_WHITE};
  box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.1);

  max-height: ${SIZES.DROPDOWN_MIN_HEIGHT}px;
  overflow-x: hidden;
  overflow-y: auto;

  top: ${(props) =>
    props.$pos.bottom > SIZES.DROPDOWN_MIN_HEIGHT / 2
      ? `${props.$pos.y + props.$pos.height + SIZES.XXS / 3}px`
      : "auto"};
  left: ${(props) => props.$pos.x}px;
  bottom: ${(props) =>
    props.$pos.bottom > SIZES.DROPDOWN_MIN_HEIGHT / 2
      ? SIZES.XL
      : props.$pos.bottom + props.$pos.height + SIZES.XXS / 3}px;
  width: ${(props) => props.$pos.width}px;
`;

// eslint-disable-next-line react-refresh/only-export-components
const OptionItems = styled(BoxtypeButton)<{
  $isSelected: boolean;
}>`
  display: flex;
  gap: ${SIZES.SM / 2}px;
  justify-content: space-between;

  padding: ${SIZES.XXS}px;
  background: ${COLORS.BASIC_WHITE};
  width: 100%;
  border-radius: 0;

  font-weight: ${(props) => (props.$isSelected ? "bold" : "normal")};
  color: ${(props) =>
    props.$isSelected ? COLORS.BRAND_DEFAULT : COLORS.BASIC_BLACK};
`;
