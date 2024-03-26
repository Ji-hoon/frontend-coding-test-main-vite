import { useDispatch, useSelector } from "react-redux";
import { imageViewerActions } from "../../store/imageViewer.slice";
import { ImageProps, StoreProps } from "../../global/types";
// import { useState } from "react";

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
      //   setAfterPos(beforePos);
      console.log(beforePos, afterPos);
      dispatch(imageViewerActions.open({ src: imageUrl }));
      dispatch(imageViewerActions.zoomIn({ beforePos, afterPos }));
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
    dispatch(imageViewerActions.zoomOut({ beforePos, afterPos }));

    setTimeout(() => {
      dispatch(imageViewerActions.close());
    }, 350);
  };

  return {
    handleZoomIn,
    handleZoomOut,
    isViewerEnabled,
  };
}
