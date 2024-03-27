import styled from "styled-components";
import { COLORS, SIZES, TYPES } from "../../global/constants";
import { FiPlus, FiTrash2 } from "react-icons/fi";
import { BoxtypeButton } from "./Button.boxtype";

export default function Button_Icontype({ type }: { type: string }) {
  return (
    <>
      <IcontypeButton>
        {type === TYPES.ADD && <FiPlus size={SIZES.LG} />}
        {type === TYPES.DELETE && <FiTrash2 size={SIZES.LG} />}
      </IcontypeButton>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
const IcontypeButton = styled(BoxtypeButton)`
  background-color: ${COLORS.BASIC_WHITE};
  color: ${COLORS.GRAY_08};
  padding: ${SIZES.SM / 2}px;
`;
