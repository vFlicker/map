type ModuleData = {
  title: string;
  goals: string[];
  href: string;
};

export type ModuleId = string;

export type ModuleType = {
  id: ModuleId;
  isLocked: boolean;
  data?: ModuleData;
};
