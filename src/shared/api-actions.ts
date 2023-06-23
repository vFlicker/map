import { createAsyncThunk } from '@reduxjs/toolkit';
import { normalize, schema } from 'normalizr';

import { ApiError, apiService, isApiError } from '~/shared/api';
import { ModuleType } from '~/shared/types/module';

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

export const fetchAllModules = createAsyncThunk<
  NormalizedModules,
  undefined,
  ThunkOptions
>('modules/fetchAllModules', async (_, thunkApi) => {
  try {
    const modules = await apiService.getAllModules();
    const normalizedModules = getNormalizedModules(modules);
    return normalizedModules.entities;
  } catch (error) {
    if (isApiError(error)) return thunkApi.rejectWithValue(error);
    throw error;
  }
});
