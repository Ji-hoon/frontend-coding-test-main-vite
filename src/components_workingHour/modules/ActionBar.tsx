import styled from "styled-components";
import Button_Boxtype from "../atoms/Button.boxtype";
import { SIZES, TYPES } from "../../global/constants";
import { useWorkingHours } from "../hooks/useWorkingHours";
import { useSelector } from "react-redux";
import { StoreProps } from "../../global/types";

export default function ActionBar() {
  const { resetHours, updateHours } = useWorkingHours();
  const { isAvailable } = useSelector((state: StoreProps) => state.workingHour);

  return (
    <ActionBarWrapper>
      <Button_Boxtype
        onClick={updateHours}
        type={TYPES.CONFIRM}
        label="Update"
        disabled={!isAvailable}
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
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.88) 10%,
    rgba(255, 255, 255, 0.96) 100%
  );
`;
