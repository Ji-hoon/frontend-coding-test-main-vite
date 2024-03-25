import { useSelector } from "react-redux";
import ImageList from "../components/ImageLists";
import { StoreProps } from "../global/types";
import ImageViewer from "../components/Viewer/ImageViewer";

function CatViewer() {
  const { imageUrl } = useSelector((state: StoreProps) => state.viewer);

  return (
    <>
      <div>1번 과제 - CatViewer</div>
      <ImageList />
      <ImageViewer>
        <img src={imageUrl} />
      </ImageViewer>
    </>
  );
}

export default CatViewer;
