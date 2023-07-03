import { ModuleState } from '../../types';

export const fetchAllModulesByIdPending = (state: ModuleState): void => {
  state.status = 'loading';
  state.error = null;
};
