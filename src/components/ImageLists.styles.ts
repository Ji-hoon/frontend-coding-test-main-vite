import { styled } from "styled-components";
import { ImageContainerWrapper } from "./ImageContainer/ImageContainer";

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

export const ImageListContainer = styled.div<{ $isLoading: boolean }>`
  display: flex;
  max-width: 1200px;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;

  opacity: ${(props) => (props.$isLoading ? "0.5" : "1")};
  transition: opacity 200ms ease-out;
`;

export const DummyImageContainer = styled(ImageContainerWrapper)`
  height: 10px;
  background-color: transparent;
`;
