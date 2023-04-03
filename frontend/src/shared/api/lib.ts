import { AxiosError } from 'axios';

import { ApiError } from './types';

const ErrorMessage = {
  NO_RESPONSE: 'No response received from the server',
  UNKNOWN_ERROR: 'An unknown error occurred',
};

export const handleApiError = (error: unknown): ApiError => {
  if (error instanceof AxiosError) {
    const { response, request } = error;

    if (response) {
      return {
        message: response.data.error,
        statusCode: response.status,
      };
    }

    if (request) {
      return {
        message: ErrorMessage.NO_RESPONSE,
        statusCode: 0,
      };
    }

    return {
      message: error.message,
      statusCode: 0,
    };
  }

  return {
    message: ErrorMessage.UNKNOWN_ERROR,
    statusCode: 0,
  };
};

export const isApiError = (error: unknown): error is ApiError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'statusCode' in error &&
    'message' in error
  );
};
