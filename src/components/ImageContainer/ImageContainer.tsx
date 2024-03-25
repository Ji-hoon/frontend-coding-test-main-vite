import { styled } from "styled-components";
import useImageViewer from "../hooks/useImageViewer";

export default function ImageContainer({
  id,
  src,
  width,
  height,
}: {
  id: string;
  src: string;
  width: number;
  height: number;
}) {
  const { handleClick, calcImagePosition } = useImageViewer();

  return (
    <>
      <ImageContainerWrapper
        onClick={(event: React.SyntheticEvent) => {
          // event.target;
          calcImagePosition(event.target as Element);
          handleClick(src);
        }}
      >
        <img id={id} src={src} width={width} height={height} />
      </ImageContainerWrapper>
    </>
  );
}

export const ImageContainerWrapper = styled.div`
  position: relative;
  background-color: #f5f5f5;
  font-size: 0;
  cursor: pointer;
`;
