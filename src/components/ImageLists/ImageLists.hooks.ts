import { useLayoutEffect, useState } from "react";
import { imageType } from "../../global/types";
import { axiosInstance } from "../../global/axiosInstance";
import { API_KEY, VALUES } from "../../global/constants";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function useImageLists() {
  const [pageCount, setPageCount] = useState(0);
  const [pageColumn, setPageColumn] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [imageElements, setImageElements] = useState<imageType[]>([]);

  const { setTarget } = useIntersectionObserver({
    onIntersect: () => {
      setIsLoading(true);
      setPageCount(pageCount + 1);
    },
  });

  useLayoutEffect(() => {
    axiosInstance
      .get(
        `/search?limit=${VALUES.IMAGE_LIMIT_COUNT}&page=${pageCount}&api_key=${API_KEY}`
      )
      .then((response) => {
        if (response) {
          const imageHistory = [...imageElements];
          const prevImages = imageHistory.concat(response.data);
          //   console.log(prevImages, imageHistory);
          setIsLoading(false);
          setImageElements(prevImages as unknown as imageType[]);
        }
      })
      .catch((error) => {
        // error
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCount]);

  return {
    pageCount,
    setPageCount,
    pageColumn,
    setPageColumn,
    isLoading,
    setIsLoading,
    imageElements,
    isError,
    setTarget,
  };
}
