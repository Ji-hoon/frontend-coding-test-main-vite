import { throttle } from "lodash";
import { useEffect } from "react";
import { imageType } from "../global/types";
import useImageLists from "./ImageLists.hooks";
import {
  ImageColumn,
  ImageListContainer,
  DummyImageContainer,
  ErrorContainer,
} from "./ImageLists.styles";
import ImageContainer from "./ImageContainer/ImageContainer";
import Loading from "./Loading/Loading";
import { VALUES } from "../global/constants";
import useImageViewer from "./hooks/useImageViewer";

export default function ImageList() {
  const {
    pageColumn,
    setPageColumn,
    isLoading,
    imageElements,
    isError,
    setTarget,
    pageCount,
    setPageCount,
  } = useImageLists();
  const { handleClick } = useImageViewer();

  const handleResize = throttle(() => {
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
      <button onClick={() => setPageCount(pageCount)}>새로고침</button>
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
                      onClick={handleClick}
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
                        onClick={handleClick}
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
                        onClick={handleClick}
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
        {isLoading && <Loading $init={pageCount === 0 ? true : false} />}
      </ImageListContainer>

      {imageElements.length > 0 && !isLoading && (
        <DummyImageContainer ref={setTarget} />
      )}

      {isError && (
        <ErrorContainer>
          <p>에러가 발생했습니다.</p>
          <button onClick={() => setPageCount(pageCount)}>새로고침</button>
        </ErrorContainer>
      )}
    </>
  );
}
