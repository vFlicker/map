import {
  createEntityAdapter,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { fetchAllModules } from '~/shared/api-actions';

import { ModuleId, ModuleType } from '../types';

const modulesAdapter = createEntityAdapter<ModuleType>();

const initialState = modulesAdapter.getInitialState({
  activeModuleId: '',
  hoveredModuleId: '',
  status: 'idle',
  error: null,
});

const moduleSlice = createSlice({
  name: 'module',
  initialState,
  reducers: {
    changeActiveModuleId: (state, action: PayloadAction<ModuleId>) => {
      state.activeModuleId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllModules.fulfilled, (state, action) => {
      modulesAdapter.setMany(state, action.payload.modules);
      state.status = 'succeeded';
    });
  },
});

export const { changeActiveModuleId } = moduleSlice.actions;

export default moduleSlice.reducer;

// selectors
export const {
  selectAll: selectModules,
  selectIds: selectModulesIds,
  selectById: selectModuleById,
} = modulesAdapter.getSelectors((state: RootState) => state.MODULE);

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

export const selectActiveModuleId = (state: RootState) => {
  return state.MODULE.activeModuleId;
};
