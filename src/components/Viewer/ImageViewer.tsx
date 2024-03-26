import { ImageProps } from "../../global/types";
import styled from "styled-components";
import ImageContainer from "../ImageContainer/ImageContainer";
import useImageViewer from "../hooks/useImageViewer";
import ImageViewerBackdrop from "./ImageViewer.backdrop";

export default function ImageViewer() {
  const {
    handleZoomOut,
    imageUrl,
    imageBeforePosAndSize,
    imageAfterPosAndSize,
    isViewerEnabled,
    isScrollable,
  } = useImageViewer();
  console.log(imageBeforePosAndSize, imageAfterPosAndSize);

  return (
    <>
      <ViewerContainer
        className={isViewerEnabled ? "open" : "closed"}
        $enabled={isViewerEnabled}
        $imageAfterPosAndSize={imageAfterPosAndSize}
      >
        <ImageViewerBackdrop />
        <ImageContainer
          id="view"
          classname={!isScrollable ? "open" : "closed"}
          src={imageUrl}
          onClick={() =>
            handleZoomOut({
              beforePos: imageAfterPosAndSize,
              afterPos: imageBeforePosAndSize,
            })
          }
          beforePos={{
            isAbsolute: true,
            x: imageBeforePosAndSize.x,
            y: imageBeforePosAndSize.y,
            width: imageBeforePosAndSize.width,
            height: imageBeforePosAndSize.height,
          }}
          afterPos={imageAfterPosAndSize}
        />
      </ViewerContainer>
    </>
  );
}

const ViewerContainer = styled.div<{
  $enabled: boolean;
  $imageAfterPosAndSize: ImageProps;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  pointer-events: ${(props) => (props.$enabled ? "auto" : "none")};
`;
