import { styled } from "styled-components";
import { ImageContainerWrapper } from "../ImageContainer/ImageContainer";
import { COLORS } from "../../global/constants";

export const ImageColumn = styled.div<{ $columnCount: number }>`
  display: flex;
  gap: 16px;
  flex-direction: column;
  width: calc(100% / ${(props) => props.$columnCount} - 16px);

  & img {
    width: 100%;
    height: auto;
  }
`;

export const ImageListContainer = styled.div<{ $isLoading?: boolean }>`
  display: flex;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;

  opacity: ${(props) => (props.$isLoading ? "0.5" : "1")};
  transition: opacity 350ms ease-out;
`;

export const DummyImageContainer = styled(ImageContainerWrapper)`
  height: 10px;
  background-color: transparent;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 24px 32px;
  border: 1px solid #ededed;
  margin: 24px auto;

  & button {
    background-color: ${COLORS.BRAND_DEFAULT};
    color: ${COLORS.BASIC_WHITE};
  }
`;
