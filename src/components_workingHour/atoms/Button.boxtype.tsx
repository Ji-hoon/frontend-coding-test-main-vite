import styled from "styled-components";
import { COLORS, TYPES, VALUES } from "../../global/constants";

// eslint-disable-next-line react-refresh/only-export-components
export default function Button_Boxtype({
  label,
  type,
  onClick,
}: {
  label: string;
  type?: string;
  onClick?: () => void;
}) {
  return (
    <>
      <BoxtypeButton onClick={onClick} $type={type}>
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
`;
