import { ImageProps, StoreProps } from "../../global/types";
import styled from "styled-components";
import ImageContainer from "../ImageContainer/ImageContainer";
import useImageViewer from "../hooks/useImageViewer";
import ImageViewerBackdrop from "./ImageViewer.backdrop";
import { useSelector } from "react-redux";

export default function ImageViewer() {
  const { handleZoomOut } = useImageViewer();

  const {
    imageUrl,
    imageBeforePosAndSize,
    imageAfterPosAndSize,
    isScrollable,
    isViewerEnabled,
  } = useSelector((state: StoreProps) => state.viewer);

  return (
    <>
      <ViewerContainer
        className={isViewerEnabled ? "open" : "closed"}
        $enabled={isViewerEnabled}
        $imageAfterPosAndSize={imageAfterPosAndSize}
      >
        <ImageViewerBackdrop />
        {!isScrollable && (
          <ImageContainer
            id="view"
            classname={!isViewerEnabled ? "open" : "closed"}
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
        )}
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
