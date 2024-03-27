import styled from "styled-components";
import { COLORS, SIZES, VALUES } from "../../global/constants";
import { BoxtypeButton } from "../atoms/Button.boxtype";

export default function Dropdown_TimeOption({
  selected,
}: {
  selected: string;
}) {
  const selectedTime = selected;
  console.log(selectedTime);

  const optionItems = [
    //TODO: 계산된 시간으로된 배열로 수정 필요
    "00:00",
    "00:15",
    "00:30",
    "00:45",
    "01:00",
    "01:15",
    "01:30",
    "01:45",
    "09:00",
    "01:45",
  ];

  return (
    <DropdownMenuListWrapper>
      {optionItems.map((item, index) => {
        return (
          <OptionItems $isSelected={selectedTime === item} key={index}>
            {item}
          </OptionItems>
        );
      })}
    </DropdownMenuListWrapper>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
const DropdownMenuListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${SIZES.XXS / 3}px 0;

  position: absolute;
  width: 180px;
  box-sizing: border-box;
  border: 1px solid ${COLORS.GRAY_02_OVERAY};
  border-radius: 5px;
  z-index: 12;
  background: ${COLORS.BASIC_WHITE};
  box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.1);

  max-height: calc(100vh - ${VALUES.DROPDOWN_MIN_HEIGHT}px);
  min-height: ${VALUES.DROPDOWN_MIN_HEIGHT}px;
  overflow-x: hidden;
  overflow-y: auto;

  // 임시 스타일
  top: 144px;
  left: 220px;
`;

// eslint-disable-next-line react-refresh/only-export-components
const OptionItems = styled(BoxtypeButton)<{
  $isSelected: boolean;
}>`
  padding: ${SIZES.XXS}px ${SIZES.SM}px;
  background: ${COLORS.BASIC_WHITE};
  width: 100%;
  border-radius: 0;

  color: ${(props) =>
    props.$isSelected ? COLORS.BRAND_DEFAULT : COLORS.BASIC_BLACK};
`;
