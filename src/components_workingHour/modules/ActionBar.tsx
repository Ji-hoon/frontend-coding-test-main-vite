import styled from "styled-components";
import Button_Boxtype from "../atoms/Button.boxtype";
import { SIZES, TYPES } from "../../global/constants";
import Button_Icontype from "../atoms/Button.icontype";

export default function ActionBar() {
  return (
    <ActionBarWrapper>
      <Button_Boxtype type={TYPES.CONFIRM} label="Update" />
      <Button_Boxtype label="Cancel" />
      <Button_Icontype type={TYPES.ADD} />
      <Button_Icontype type={TYPES.DELETE} />
    </ActionBarWrapper>
  );
}

const ActionBarWrapper = styled.div`
  display: flex;
  gap: ${SIZES.XS / 2}px;
  padding: ${SIZES.SM}px;
  flex-direction: row-reverse;
`;
