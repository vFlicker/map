type ModuleData = {
  title: string;
  lessons: string[];
  href: SrcString;
  previewMobileAvailableSrc: SrcString;
  previewMobileNotAvailableSrc: SrcString;
  moduleMobileBigSrc: SrcString;
  previewAvailableSrc: SrcString;
  previewNotAvailableSrc: SrcString;
  moduleBigSrc: SrcString;
};

export type ModuleType = {
  id: ModuleId;
  isLocked: boolean;
  data: ModuleData;
};
