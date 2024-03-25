import ReactDOM from "react-dom";
import { PortalProps, StoreProps } from "../../global/types";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { imageViewerActions } from "../../store/imageViewer.slice";

export default function ImageViewer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isViewerEnabled } = useSelector((state: StoreProps) => state.viewer);
  const dispatch = useDispatch();

  function handleBackdropClick() {
    dispatch(imageViewerActions.close());
  }

  const ViewerPortal = ({ children }: PortalProps) => {
    return ReactDOM.createPortal(
      children,
      document.getElementById("viewer") as HTMLElement
    );
  };

  return (
    <ViewerPortal>
      <ViewerContainer $enabled={isViewerEnabled}>
        <div className="backdrop" />
        <div className="imageContainer" onClick={handleBackdropClick}>
          {children}
        </div>
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

  display: flex;
  justify-content: center;
  align-items: center;

  pointer-events: ${(props) => (props.$enabled ? "auto" : "none")};

  & .backdrop {
    position: absolute;
    width: 100%;
    height: 100%;

    background-color: #fff;
    opacity: ${(props) => (props.$enabled ? "0.5" : "0")};

    transition: opacity 400ms ease-out;
  }

  & .imageContainer {
    z-index: 1;
    cursor: pointer;
    opacity: ${(props) => (props.$enabled ? "1" : "0")};
  }
`;
