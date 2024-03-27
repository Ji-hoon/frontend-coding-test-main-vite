import styled from "styled-components";
import { COLORS, TYPES, VALUES } from "../../global/constants";

// eslint-disable-next-line react-refresh/only-export-components
export default function Button_Boxtype({
  label,
  type,
  onClick,
  disabled,
}: {
  label: string;
  type?: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <>
      <BoxtypeButton onClick={onClick} $type={type} disabled={disabled}>
        {label}
      </BoxtypeButton>
    </>
  );
}

export const BoxtypeButton = styled.button<{
  $type?: string | undefined;
}>`
  display: flex;
  align-items: center;

  background-color: ${(props) =>
    props.$type === TYPES.CONFIRM ? COLORS.BRAND_DEFAULT : COLORS.GRAY_01};
  color: ${(props) =>
    props.$type === TYPES.CONFIRM ? COLORS.BASIC_WHITE : COLORS.BASIC_BLACK};

  transition: all ${VALUES.ANIMATION_TIMING_SHORT}ms ease-out;

  &:not([disabled]) {
    &:hover {
      border-color: transparent;
      filter: brightness(0.94);
    }
    &:active {
      filter: brightness(0.9);
    }
    &:focus {
      outline: none;
    }
  }

  &[disabled] {
    background-color: ${COLORS.GRAY_05};
    border-color: transparent;
    cursor: not-allowed;
  }
`;
