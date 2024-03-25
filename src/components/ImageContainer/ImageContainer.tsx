import { styled } from "styled-components";

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
  return (
    <ImageContainerWrapper>
      <img id={id} src={src} width={width} height={height} />
    </ImageContainerWrapper>
  );
}

export const ImageContainerWrapper = styled.div`
  position: relative;
  background-color: #f5f5f5;
  font-size: 0;
`;
