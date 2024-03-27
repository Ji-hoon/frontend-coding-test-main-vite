import styled from "styled-components";
import Input from "../atoms/Input";
import { SIZES, TYPES } from "../../global/constants";
import Button_Icontype from "../atoms/Button.icontype";

export default function Range_Input() {
  return (
    <RangeInputWrapper>
      <Input defaultValue="09:00" />
      -
      <Input defaultValue="17:00" />
      &nbsp;
      <Button_Icontype type={TYPES.DELETE} />
      <Button_Icontype type={TYPES.ADD} id={TYPES.ADD} />
    </RangeInputWrapper>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
const RangeInputWrapper = styled.div`
  display: flex;
  gap: ${SIZES.XXS / 2}px;
  align-items: center;
`;
