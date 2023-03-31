type ModuleData = {
  title: string;
  goals: string[];
  href: SrcString;
  previewSrc: SrcString;
  moduleSrc: SrcString;
  moduleBigSrc: SrcString;
};

export type ModuleType = {
  id: ModuleId;
  isLocked: boolean;
  data?: ModuleData;
};
