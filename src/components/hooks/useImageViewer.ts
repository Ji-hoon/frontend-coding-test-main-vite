import { useDispatch, useSelector } from "react-redux";
import { imageViewerActions } from "../../store/imageViewer.slice";
import { ImageProps, StoreProps } from "../../global/types";

export default function useImageViewer() {
  const dispatch = useDispatch();

  const { isViewerEnabled } = useSelector((state: StoreProps) => state.viewer);

  const handleClick = ({
    imageUrl,
    sizeAndPos,
  }: {
    imageUrl?: string;
    sizeAndPos?: ImageProps;
  }) => {
    if (!isViewerEnabled) {
      dispatch(imageViewerActions.open({ src: imageUrl, pos: sizeAndPos }));
      return;
    }
    dispatch(imageViewerActions.close());
  };

  const calcCurrentPosition = (element: Element) => {
    const offset = element.getBoundingClientRect();
    return {
      x: offset.left,
      y: offset.top,
      width: offset.width,
      height: offset.height,
    };
  };

  return { handleClick, calcCurrentPosition, isViewerEnabled };
}
