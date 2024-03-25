import { useDispatch, useSelector } from "react-redux";
import { imageViewerActions } from "../../store/imageViewer.slice";
import { StoreProps } from "../../global/types";
import { useState } from "react";

export default function useImageViewer() {
  const dispatch = useDispatch();
  const [imageOriginPos, setImageOriginPos] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const { isViewerEnabled } = useSelector((state: StoreProps) => state.viewer);

  const handleClick = (imageUrl?: string) => {
    console.log(imageUrl);

    if (!isViewerEnabled) {
      dispatch(imageViewerActions.open(imageUrl));
      return;
    }
  };

  const calcImagePosition = (element: Element) => {
    const offset = element.getBoundingClientRect();
    console.log(offset);
    setImageOriginPos({
      x: offset.left,
      y: offset.top,
      width: offset.width,
      height: offset.height,
    });
  };

  return { handleClick, calcImagePosition, imageOriginPos };
}
