import { ModuleType, UUID } from '../types';
import { httpClient } from './httpClient';
import { handleApiError } from './lib';

export const getAllModulesById = async (
  userId: UUID,
): Promise<ModuleType[]> => {
  try {
    const { data } = await httpClient.get<ModuleType[]>(`/modules/${userId}`);
    return data;
  } catch (error) {
    const result = handleApiError(error);
    throw result;
  }
};

export const getAllModules = async (): Promise<ModuleType[]> => {
  try {
    const { data } = await httpClient.get<ModuleType[]>(`/modules/`);
    return data;
  } catch (error) {
    const result = handleApiError(error);
    throw result;
  }
};
