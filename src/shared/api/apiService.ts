import { ModuleType } from '~/entities/module';

import { modulesData } from './modules-data';

export const getAllModules = async (): Promise<ModuleType[]> => {
  return modulesData;
};
