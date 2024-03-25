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
    imageUrl: string;
    imagePosAndSize: ImageProps;
  };
};

export type ImageProps = {
  x: number;
  y: number;
  width: number;
  height: number;
};
