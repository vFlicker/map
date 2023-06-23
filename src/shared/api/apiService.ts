import { ModuleType, UUID } from '../types';
import { httpClient } from './httpClient';
import { handleApiError } from './lib';

export const getAllModules = async (userId: UUID): Promise<ModuleType[]> => {
  try {
    const { data } = await httpClient.get<ModuleType[]>(`/modules/${userId}`);
    return data;
  } catch (error) {
    const result = handleApiError(error);
    throw result;
  }
};
