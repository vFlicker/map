import { ModuleState } from '../../types';

export const fetchAllModulesPending = (state: ModuleState): void => {
  state.status = 'loading';
  state.error = null;
};
