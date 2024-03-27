import { FiChevronDown } from "react-icons/fi";
import styled from "styled-components";
import { COLORS, SIZES, VALUES } from "../../global/constants";
import Dropdown from "./Dropdown";

export default function Input({ defaultValue }: { defaultValue: string }) {
  //   const timeOption = "09:00"; //TODO : default value를 props로 전달받도록 수정

  return (
    <>
      <SelectorInputContainer>
        <SelectorInput type="text" value={defaultValue} />
        <FiChevronDown strokeWidth="3" />
      </SelectorInputContainer>
      <Dropdown>
        <>import dropdown menu</>
      </Dropdown>
    </>
  );
}

const SelectorInputContainer = styled.div`
  position: relative;
  display: flex;
  max-width: ${SIZES.MAX_WIDTH_INPUT}px;

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
  border: 1px solid ${COLORS.GRAY_01};
  color: ${COLORS.BASIC_BLACK};
  border-radius: 5px;
  outline: none;
  font-size: ${SIZES.SM}px;
  line-height: ${SIZES.LG}px;
  transition: all ${VALUES.ANIMATION_TIMING_SHORTER}ms ease-out;

  &:hover {
    border-color: ${COLORS.GRAY_02};
  }
  &.active,
  &:focus {
    border-color: ${COLORS.BRAND_DEFAULT};
  }
`;
