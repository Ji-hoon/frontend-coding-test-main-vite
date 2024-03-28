export const calcCurrentPosition = (element: Element) => {
  const offset = element.getBoundingClientRect();
  const newPos = {
    x: offset.left,
    y: offset.top,
    width: offset.width,
    height: offset.height,
    bottom: window.innerHeight - offset.bottom,
  };

  return newPos;
};

export const calcInnerWindowSize = (element: Element) => {
  const windowWidth = window.innerWidth;
  const widdowHeight = window.innerHeight;

  const offset = element.getBoundingClientRect();

  const targetWidth = (widdowHeight / offset.height) * offset.width;
  const targetHeight = widdowHeight;
  const targetX = (windowWidth - targetWidth) / 2;
  const targetY = 0;

  return {
    x: Math.floor(targetX || 0),
    y: Math.floor(targetY || 0),
    width: Math.floor(targetWidth || 0),
    height: Math.floor(targetHeight || 0),
  };
};
