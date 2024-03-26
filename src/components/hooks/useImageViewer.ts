import { useDispatch, useSelector } from "react-redux";
import { imageViewerActions } from "../../store/imageViewer.slice";
import { ImageProps, StoreProps } from "../../global/types";
import { VALUES } from "../../global/constants";

export default function useImageViewer() {
  const dispatch = useDispatch();

  const { isViewerEnabled } = useSelector((state: StoreProps) => state.viewer);

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
      dispatch(imageViewerActions.open({ src: imageUrl, beforePos }));
      setTimeout(() => {
        dispatch(imageViewerActions.toggleZoom({ beforePos, afterPos }));
      }, VALUES.ANIMATION_DELAY_100);

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
    }, VALUES.ANIMATION_TIMING_SHORT);
  };

  return {
    handleZoomIn,
    handleZoomOut,
    isViewerEnabled,
  };
}
