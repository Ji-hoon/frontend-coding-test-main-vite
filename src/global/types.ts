export type imageType = {
  url: string;
  width: number;
  height: number;
  id: string;
};

export type PortalProps = {
  children?: React.ReactNode;
};

export type StoreProps = {
  viewer: {
    isViewerEnabled: boolean;
    isScrollable: boolean;
    imageUrl: string;
    imageBeforePosAndSize: ImageProps;
    imageAfterPosAndSize: ImageProps;
  };
};

export type ImageProps = {
  x: number | undefined;
  y: number | undefined;
  width: number | undefined;
  height: number | undefined;
};
