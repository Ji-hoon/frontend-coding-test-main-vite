import styled from "styled-components";
import Input from "../atoms/Input";
import { SIZES } from "../../global/constants";

export default function Range_Input() {
  return (
    <RangeInputWrapper>
      <Input defaultValue="09:00" />
      -
      <Input defaultValue="17:00" />
    </RangeInputWrapper>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
const RangeInputWrapper = styled.div`
  display: flex;
  gap: ${SIZES.XXS / 2}px;
  align-items: center;
`;
