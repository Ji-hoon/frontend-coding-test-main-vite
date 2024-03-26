import { styled } from "styled-components";
import { ImageProps, StoreProps } from "../../global/types";
import {
  calcCurrentPosition,
  calcInnerWindowSize,
} from "../../utils/calcImageContainer";
import { useSelector } from "react-redux";
import { VALUES } from "../../global/constants";

export default function ImageContainer({
  id,
  classname,
  src,
  onClick,
  beforePos,
  afterPos,
}: {
  id: string;
  classname?: string;
  src: string;
  onClick: ({
    imageUrl,
    beforePos,
    afterPos,
  }: {
    imageUrl: string;
    beforePos: ImageProps;
    afterPos: ImageProps;
  }) => void;
  beforePos?: ImageProps & { isAbsolute: boolean };
  afterPos?: ImageProps;
}) {
  const { isViewerEnabled } = useSelector((state: StoreProps) => state.viewer);

  return (
    <>
      <ImageContainerWrapper
        $beforePos={beforePos}
        $afterPos={afterPos}
        $isOpen={isViewerEnabled}
        className={classname}
        onClick={(event: React.SyntheticEvent) => {
          const calcedBeforePos = calcCurrentPosition(event.target as Element);
          const calcedAfterPos = calcInnerWindowSize(event.target as Element);

          onClick({
            imageUrl: src,
            beforePos: calcedBeforePos,
            afterPos: calcedAfterPos,
          });
        }}
      >
        <img alt={id} src={src} />
      </ImageContainerWrapper>
    </>
  );
}

export const ImageContainerWrapper = styled.div<{
  $beforePos?: ImageProps & { isAbsolute: boolean };
  $afterPos?: ImageProps;
  $isOpen?: boolean;
}>`
  position: ${(props) =>
    props.$beforePos?.isAbsolute ? "absolute" : "static"};
  background-color: #f5f5f5;
  font-size: 0;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  opacity: ${(props) =>
    props.$isOpen
      ? 0.4
      : !props.$isOpen && !props.$beforePos?.isAbsolute
      ? 1
      : 0};

  left: ${(props) => props.$beforePos?.x}px;
  top: ${(props) => props.$beforePos?.y}px;

  width: ${(props) => props.$beforePos?.width}px;
  height: ${(props) => props.$beforePos?.height}px;

  -webkit-transition: ${(props) =>
    props.$beforePos?.isAbsolute
      ? `all ${VALUES.ANIMATION_TIMING_SHORT}ms 0ms cubic-bezier(0.52, 0.13, 0.33, 1.05)`
      : `opacity ${VALUES.ANIMATION_TIMING_SHORT}ms cubic-bezier(0.53, 0.15, 0.34, 1.01)`};
  transition: ${(props) =>
    props.$beforePos?.isAbsolute
      ? `all ${VALUES.ANIMATION_TIMING_SHORT}ms 0ms cubic-bezier(0.52, 0.13, 0.33, 1.05)`
      : `opacity ${VALUES.ANIMATION_TIMING_SHORT}ms cubic-bezier(0.53, 0.15, 0.34, 1.01)`};

  &.open,
  &.closed {
    opacity: 1;
    border-radius: 0;
    visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};

    left: ${(props) => props.$afterPos?.x}px;
    top: ${(props) => props.$afterPos?.y}px;

    width: ${(props) => props.$afterPos?.width}px;
    height: ${(props) => props.$afterPos?.height}px;
  }

  & img {
    width: 100%;
    height: 100%;
  }
`;
