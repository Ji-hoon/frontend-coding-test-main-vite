import { throttle } from "lodash";
import { useEffect } from "react";
import { imageType } from "../global/types";
import useImageLists from "./ImageLists.hooks";
import {
  ImageColumn,
  ImageListContainer,
  DummyImageContainer,
} from "./ImageLists.styles";
import ImageContainer from "./ImageContainer/ImageContainer";
import Loading from "./Loading/Loading";
import { VALUES } from "../global/constants";

export default function ImageList() {
  const {
    pageColumn,
    setPageColumn,
    isLoading,
    imageElements,
    isError,
    setTarget,
  } = useImageLists();

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
      {imageElements.length > 0 && (
        <ImageListContainer $isLoading={isLoading}>
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
                      id={String(index)}
                      key={index}
                      src={image.url}
                      width={image.width}
                      height={image.height}
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
                        id={String(index)}
                        key={index}
                        src={image.url}
                        width={image.width}
                        height={image.height}
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
                        id={String(index)}
                        key={index}
                        src={image.url}
                        width={image.width}
                        height={image.height}
                      />
                    );
                })}
              </ImageColumn>
            )}
          </>
        </ImageListContainer>
      )}
      {imageElements.length > 0 && !isLoading && (
        <DummyImageContainer ref={setTarget} />
      )}
      {isLoading && <Loading />}
      {isError && <>에러가 발생했습니다.</>}
    </>
  );
}
