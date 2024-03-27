import styled from "styled-components";
import Button_Boxtype from "../atoms/Button.boxtype";
import { SIZES, TYPES } from "../../global/constants";
import { useWorkingHours } from "../hooks/useWorkingHours";

export default function ActionBar() {
  const { resetHours, updateHours } = useWorkingHours();

  return (
    <ActionBarWrapper>
      <Button_Boxtype
        onClick={updateHours}
        type={TYPES.CONFIRM}
        label="Update"
      />
      <Button_Boxtype onClick={resetHours} label="Cancel" />
    </ActionBarWrapper>
  );
}

const ActionBarWrapper = styled.div`
  display: flex;
  gap: ${SIZES.XS / 2}px;
  padding: ${SIZES.SM}px;
  flex-direction: row-reverse;
  height: 75px;
  box-sizing: border-box;

  position: sticky;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
`;
