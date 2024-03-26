import { useDispatch, useSelector } from "react-redux";
import { imageViewerActions } from "../../store/imageViewer.slice";
import { ImageProps, StoreProps } from "../../global/types";

export default function useImageViewer() {
  const dispatch = useDispatch();

  const {
    imageUrl,
    imageBeforePosAndSize,
    imageAfterPosAndSize,
    isViewerEnabled,
    isScrollable,
  } = useSelector((state: StoreProps) => state.viewer);

  const handleZoomIn = ({
    imageUrl,
    beforePos,
    afterPos,
  }: {
    imageUrl?: string;
    beforePos: ImageProps;
    afterPos: ImageProps;
  }) => {
    if (!isViewerEnabled) {
      console.log("before: ", beforePos, "after", afterPos, isViewerEnabled);
      dispatch(imageViewerActions.open({ src: imageUrl, beforePos }));
      setTimeout(() => {
        dispatch(imageViewerActions.toggleZoom({ beforePos, afterPos }));
      }, 100);

      return;
    }
  };

  const handleZoomOut = ({
    beforePos,
    afterPos,
  }: {
    beforePos: ImageProps;
    afterPos: ImageProps;
  }) => {
    dispatch(imageViewerActions.toggleZoom({ beforePos, afterPos }));
    dispatch(imageViewerActions.close());

    setTimeout(() => {
      dispatch(imageViewerActions.reset());
    }, 300);
  };

  return {
    handleZoomIn,
    handleZoomOut,
    imageUrl,
    imageBeforePosAndSize,
    imageAfterPosAndSize,
    isViewerEnabled,
    isScrollable,
  };
}
