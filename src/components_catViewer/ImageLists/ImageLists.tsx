import { throttle } from "lodash";
import { useEffect } from "react";
import { imageType } from "../../global/types";
import useImageLists from "./ImageLists.hooks";
import {
  ImageColumn,
  ImageListContainer,
  DummyImageContainer,
  ErrorContainer,
} from "./ImageLists.styles";
import ImageContainer from "../ImageContainer/ImageContainer";
import Loading from "../Loading/Loading";
import { VALUES } from "../../global/constants";
import useImageViewer from "../hooks/useImageViewer";
import { useDispatch } from "react-redux";
import { imageViewerActions } from "../../store/imageViewer.slice";

export default function ImageList() {
  const {
    pageColumn,
    setPageColumn,
    isLoading,
    imageElements,
    isError,
    setTarget,
    pageCount,
  } = useImageLists();
  const { handleZoomIn } = useImageViewer();
  const dispatch = useDispatch();

  const handleResize = throttle(() => {
    dispatch(imageViewerActions.reset());

    if (window.innerWidth > VALUES.BREAKPOINT_XLARGE) {
      setPageColumn(3);
    }
    if (
      window.innerWidth > VALUES.BREAKPOINT_LARGE &&
      window.innerWidth <= VALUES.BREAKPOINT_XLARGE
    ) {
      setPageColumn(2);
    }
    if (window.innerWidth <= VALUES.BREAKPOINT_LARGE) {
      setPageColumn(1);
    }
  }, 500);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <>
      {!isError && (
        <ImageListContainer>
          {imageElements.length > 0 && (
            <>
              <ImageColumn $columnCount={pageColumn}>
                {imageElements.map((image: imageType, index) => {
                  if (
                    (pageColumn === 3 && (index - 3) % 3 === 0) ||
                    (pageColumn === 2 && (index - 2) % 2 === 0) ||
                    pageColumn === 1
                  )
                    return (
                      <ImageContainer
                        onClick={handleZoomIn}
                        id={image.id}
                        key={index}
                        src={image.url}
                      />
                    );
                })}
              </ImageColumn>
              {pageColumn >= 2 && (
                <ImageColumn $columnCount={pageColumn}>
                  {imageElements.map((image: imageType, index) => {
                    if (
                      (pageColumn === 3 && (index - 3) % 3 === 1) ||
                      index === 1 ||
                      (pageColumn === 2 && (index - 2) % 2 === 1) ||
                      index === 1
                    )
                      return (
                        <ImageContainer
                          onClick={handleZoomIn}
                          id={image.id}
                          key={index}
                          src={image.url}
                        />
                      );
                  })}
                </ImageColumn>
              )}
              {pageColumn >= 3 && (
                <ImageColumn $columnCount={pageColumn}>
                  {imageElements.map((image: imageType, index) => {
                    if ((index - 3) % 3 === 2 || index === 2)
                      return (
                        <ImageContainer
                          onClick={handleZoomIn}
                          id={image.id}
                          key={index}
                          src={image.url}
                        />
                      );
                  })}
                </ImageColumn>
              )}
            </>
          )}
          {isLoading && !isError && (
            <Loading $init={pageCount === 0 ? true : false} />
          )}
        </ImageListContainer>
      )}

      {imageElements.length > 0 && !isLoading && !isError && (
        <DummyImageContainer ref={setTarget} />
      )}

      {isError && (
        <ErrorContainer>
          <p>Fail to loading images.</p>
          <button onClick={() => (location.href = "/cat-viewer")}>
            Refresh
          </button>
        </ErrorContainer>
      )}
    </>
  );
}
