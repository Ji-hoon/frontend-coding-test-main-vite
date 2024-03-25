import { styled } from "styled-components";
import useImageViewer from "../hooks/useImageViewer";
import { ImageProps } from "../../global/types";

export default function ImageContainer({
  id,
  src,
  onClick,
  absolutePos,
}: {
  id: string;
  src: string;
  onClick: ({
    imageUrl,
    sizeAndPos,
  }: {
    imageUrl: string;
    sizeAndPos: ImageProps;
  }) => void;
  absolutePos?: {
    isAbsolute?: boolean;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
  };
}) {
  const { calcCurrentPosition } = useImageViewer();

  return (
    <>
      <ImageContainerWrapper
        x={absolutePos?.x}
        y={absolutePos?.y}
        width={absolutePos?.width}
        height={absolutePos?.height}
        className={absolutePos?.isAbsolute ? "absolute" : "static"}
        onClick={(event: React.SyntheticEvent) => {
          // event.target;
          const sizeAndPos = calcCurrentPosition(event.target as Element);
          onClick({
            imageUrl: src,
            sizeAndPos,
          });
        }}
      >
        <img alt={id} src={src} />
      </ImageContainerWrapper>
    </>
  );
}

export const ImageContainerWrapper = styled.div<{
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}>`
  position: relative;
  background-color: #f5f5f5;
  font-size: 0;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;

  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  &.absolute {
    position: absolute;
    opacity: 0;
    left: ${(props) => props.x}px;
    top: ${(props) => props.y}px;

    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
  }

  & img {
    width: 100%;
    height: auto;
  }
`;
