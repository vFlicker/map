import { createAsyncThunk } from '@reduxjs/toolkit';
import { normalize, schema } from 'normalizr';

import { ApiError, apiService, isApiError } from '~/shared/api';
import { ModuleType } from '~/shared/types';
import { UUID } from './types';

type ThunkOptions = {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: ApiError;
};

export type NormalizedModules = {
  modules: { [key: string]: ModuleType };
};

const moduleSchema = new schema.Entity<ModuleType>('modules');
const moduleListSchema = new schema.Array(moduleSchema);

const getNormalizedModules = (modules: ModuleType[]) => {
  return normalize<ModuleType[], NormalizedModules>(modules, moduleListSchema);
};

export const fetchAllModulesById = createAsyncThunk<
  NormalizedModules,
  UUID,
  ThunkOptions
>('modules/fetchAllModulesById', async (userId, thunkApi) => {
  try {
    const modules = await apiService.getAllModulesById(userId);
    const normalizedModules = getNormalizedModules(modules);
    return normalizedModules.entities;
  } catch (error) {
    if (isApiError(error)) return thunkApi.rejectWithValue(error);
    throw error;
  }
});

export const fetchAllModules = createAsyncThunk<
  NormalizedModules,
  undefined,
  ThunkOptions
>('modules/fetchAllModules', async (_, thunkApi) => {
  try {
    const modules = await apiService.getAllModules();

    const modulesWithStatus = modules.map((module) => ({
      ...module,
      isLocked: true,
    }));

    const normalizedModules = getNormalizedModules(modulesWithStatus);
    return normalizedModules.entities;
  } catch (error) {
    if (isApiError(error)) return thunkApi.rejectWithValue(error);
    throw error;
  }
});
