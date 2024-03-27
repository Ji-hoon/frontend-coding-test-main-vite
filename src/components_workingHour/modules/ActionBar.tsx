import styled from "styled-components";
import Button_Boxtype from "../atoms/Button.boxtype";
import { SIZES, TYPES } from "../../global/constants";

export default function ActionBar() {
  return (
    <ActionBarWrapper>
      <Button_Boxtype type={TYPES.CONFIRM} label="Update" />
      <Button_Boxtype label="Cancel" />
    </ActionBarWrapper>
  );
}

const ActionBarWrapper = styled.div`
  display: flex;
  gap: ${SIZES.XS / 2}px;
  padding: ${SIZES.SM}px;
  flex-direction: row-reverse;

  position: sticky;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
`;
