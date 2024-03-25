import ReactDOM from "react-dom";
import { PortalProps, StoreProps } from "../../global/types";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ImageContainer from "../ImageContainer/ImageContainer";
import useImageViewer from "../hooks/useImageViewer";
import ImageViewerBackdrop from "./ImageViewer.backdrop";

export default function ImageViewer() {
  const { imageUrl, imagePosAndSize } = useSelector(
    (state: StoreProps) => state.viewer
  );
  const { handleClick, isViewerEnabled } = useImageViewer();

  const ViewerPortal = ({ children }: PortalProps) => {
    return ReactDOM.createPortal(
      children,
      document.getElementById("viewer") as HTMLElement
    );
  };

  return (
    <ViewerPortal>
      <ViewerContainer
        className={isViewerEnabled ? "open" : "closed"}
        $enabled={isViewerEnabled}
      >
        <ImageViewerBackdrop />
        <ImageContainer
          id="view"
          src={imageUrl}
          onClick={handleClick}
          absolutePos={{
            isAbsolute: true,
            x: imagePosAndSize.x,
            y: imagePosAndSize.y,
            width: imagePosAndSize.width,
            height: imagePosAndSize.height,
          }}
        />
      </ViewerContainer>
    </ViewerPortal>
  );
}

const ViewerContainer = styled.div<{
  $enabled: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  pointer-events: ${(props) => (props.$enabled ? "auto" : "none")};

  &.open .absolute {
    opacity: 1;
  }
`;
