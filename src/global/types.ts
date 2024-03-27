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
  workingHour: {
    hours: WorkingHourType[];
    isModified: boolean;
    isAvailable: boolean;
    isSyncedWithLocalStorage: boolean;
    isDropdownOpen: boolean;
    dropdownPos: DropdownTriggerPosAndSize;
    selectedTime: string;
    selectedTimeOrder: string;
    selectedTimeId: number;
    selectedDay: string;
  };
};

export type ImageProps = {
  x: number | undefined;
  y: number | undefined;
  width: number | undefined;
  height: number | undefined;
};

export type WorkingHourType = {
  day: string;
  times: TimeRangeType[] | [];
};

export type TimeRangeType = {
  from: string;
  to: string;
  isValid: boolean;
};

export type DropdownTriggerPosAndSize = {
  x: number;
  y: number;
  width: number;
  height: number;
};
