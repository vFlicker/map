import { createSelector, createSlice } from '@reduxjs/toolkit';

import { fetchAllModules } from '~/shared/api-actions';

import { modulesAdapter } from '../helpers';
import { ModuleState } from '../types';
import {
  changeActiveModuleIdReducer,
  fetchAllModulesFulfilled,
  fetchAllModulesPending,
  fetchAllModulesRejected,
  setEmptyDataReducer,
} from './reducers';

const initialState: ModuleState = modulesAdapter.getInitialState({
  activeModuleId: -1,
  status: 'idle',
  error: null,
});

const moduleSlice = createSlice({
  name: 'module',
  initialState,
  reducers: {
    setEmptyData: setEmptyDataReducer,
    changeActiveModuleId: changeActiveModuleIdReducer,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllModules.pending, fetchAllModulesPending)
      .addCase(fetchAllModules.fulfilled, fetchAllModulesFulfilled)
      .addCase(fetchAllModules.rejected, fetchAllModulesRejected);
  },
});

// Actions
export const { changeActiveModuleId, setEmptyData } = moduleSlice.actions;

// Reducer
export default moduleSlice.reducer;

// Selectors
export const { selectAll: selectModules, selectById: selectModuleById } =
  modulesAdapter.getSelectors((state: RootState) => state.MODULE);

const selectLockedModules = createSelector(selectModules, (modules) => {
  const lockedModules = modules.filter(({ isLocked }) => isLocked);
  return lockedModules;
});

const selectUnlockedModules = createSelector(selectModules, (modules) => {
  const unlockedModules = modules.filter(({ isLocked }) => !isLocked);
  return unlockedModules;
});

export const selectLockedModulesIds = createSelector(
  selectLockedModules,
  (lockedModules) => {
    const lockedModulesIds = lockedModules.map(({ id }) => id);
    return lockedModulesIds;
  },
);

export const selectUnlockedModulesIds = createSelector(
  selectUnlockedModules,
  (unlockedModules) => {
    const unlockedModulesIds = unlockedModules.map(({ id }) => id);
    return unlockedModulesIds;
  },
);

export const selectIsAllLocked = createSelector(
  selectUnlockedModulesIds,
  (unlockedModules) => {
    const isAllLocked = unlockedModules.length === 0;
    return isAllLocked;
  },
);

export const selectActiveModuleId = (state: RootState) => {
  return state.MODULE.activeModuleId;
};
