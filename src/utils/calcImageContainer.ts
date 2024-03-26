export const calcCurrentPosition = (element: Element) => {
  const offset = element.getBoundingClientRect();
  const newPos = {
    x: offset.left,
    y: offset.top,
    width: offset.width,
    height: offset.height,
  };

  return newPos;
};

export const calcInnerWindowSize = (element: Element) => {
  const windowWidth = window.innerWidth;
  const widdowHeight = window.innerHeight;

  const offset = element.getBoundingClientRect();

  let targetWidth = 0;
  let targetHeight = 0;
  let targetX = 0;
  let targetY = 0;

  // 이미지의 가로가 길면 윈도우 가로 너비를, 세로가 길면 윈도우 세로 높이를 할당한다.
  // 1. 가로가 긴 경우 targetWidth는 windowWidth 값을 할당하고,
  //    targetHeight값에는 targetWidth / offset.width 값을 나눈 값을 곱하여 할당한다.
  // 2. 세로가 긴 경우 targetHeight에 windowHeight 값을 할당하고,
  //    targetWidth 값에는 targetHeight / offset.height 값을 나눈 값을 곱하여 할당한다.

  if (offset.width > offset.height) {
    targetWidth = windowWidth;
    targetHeight = (windowWidth / offset.width) * offset.height;
    targetX = 0;
    targetY = (widdowHeight - targetHeight) / 2;
  }

  if (offset.width <= offset.height) {
    targetWidth = (widdowHeight / offset.height) * offset.width;
    targetHeight = widdowHeight;
    targetX = (windowWidth - targetWidth) / 2;
    targetY = 0;
  }

  return {
    x: targetX,
    y: targetY,
    width: targetWidth,
    height: targetHeight,
  };
};
