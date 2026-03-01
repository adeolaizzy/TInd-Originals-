/**
 * External imports
 */
import {
  MutationFunction,
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';
import { AxiosResponse, ResponseType } from 'axios';
import qs from 'query-string';

import { createApiRequest } from '@/services/api/createRequest';

/**
 * Internal imports
 */
import { client } from './client';

/**
 * the endpoint properties to be called in mutation
 */
interface DefinitionMutationOptions<
  TData = unknown,
  TError = unknown,
> extends UseMutationOptions<TData, TError, PayloadType, unknown> {
  url: string;
  method: 'POST' | 'PATCH' | 'DELETE' | 'GET' | 'PUT';
  apiOptions?: {
    responseType?: ResponseType;
    headers?: Record<string, string>;
  };
  keysToRefetch?: string[][];
}

/**
 * Definition of properties for using the mutation that include
 * query parameters, keys to refetch, path parameters, and lifecycle hooks
 */
interface UsageMutationOptions<TData, TError = unknown> {
  queryParams?: Record<string, string>;
  pathParams?: Record<string, string | number>;
  refetch?: string[][];
  onSuccess?: (data: TData, variables: PayloadType, context: unknown) => void;
  onError?: (error: TError, variables: PayloadType, context: unknown) => void;
  onSettled?: (
    data: TData | undefined,
    error: TError | null,
    variables: PayloadType,
    context: unknown,
  ) => void;
}

// Payload type definition
export type PayloadType = Record<string, unknown> | FormData | undefined;

// Helper function to replace path parameters in the URL
const replacePathParams = (
  url: string,
  pathParams?: Record<string, string | number>,
) => {
  if (!pathParams) return url;
  return Object.keys(pathParams).reduce(
    (acc, key) => acc.replace(`:${key}`, String(pathParams[key])),
    url,
  );
};

// The createMutation function that takes the definition options and returns a new function that takes usage options
// and returns a mutation result
export const createMutation = <TData, TError = unknown>(
  definitionOptions: DefinitionMutationOptions<TData, TError>,
): ((
  arg: UsageMutationOptions<TData, TError>,
) => UseMutationResult<TData, TError, PayloadType, unknown>) => {
  const useMutationFn = (
    usageOptions: UsageMutationOptions<TData, TError> = {},
  ) => {
    const { url, keysToRefetch, method = 'POST' } = definitionOptions;
    const {
      queryParams,
      pathParams,
      refetch: usageRefetch,
      ...restUsageOptions
    } = usageOptions;

    // Merge keys for refetching
    const mergedKeys = mergeKeysToRefetch(keysToRefetch, usageRefetch);
    const params = queryParams ? qs.stringify(queryParams) : '';

    // Replace path parameters in the URL
    const finalUrl = replacePathParams(url, pathParams);

    const mergedConfigs = mergeOptions<TData, TError>(
      restUsageOptions,
      definitionOptions,
    );

    // Overwrite onSuccess to include invalidation of queries
    const success = mergedConfigs.onSuccess;
    mergedConfigs.onSuccess = (...args) => {
      mergedKeys.forEach((key) => {
        client.invalidateQueries({ queryKey: key });
      });

      success?.(...args);
    };

    // Type of the mutation function
    const mutationFn: MutationFunction<TData, PayloadType | FormData> = (
      data?: PayloadType | FormData,
    ) =>
      createApiRequest<AxiosResponse<TData>>({
        url: finalUrl,
        data,
        method,
        queryParams: params,
        apiOptions: definitionOptions.apiOptions,
      }).then((response) => response as TData);

    return useMutation<TData, TError, PayloadType, unknown>({
      mutationFn,
      ...mergedConfigs,
    });
  };

  return useMutationFn;
};

// Merge keys for refetching. If keys exist in both the definition and usage options, they are combined.
const mergeKeysToRefetch = (
  keysToRefetch?: string[][],
  refetch?: string[][],
) => {
  let mergedKeys: string[][] = [];

  if (Array.isArray(keysToRefetch) && keysToRefetch.length > 0) {
    mergedKeys = [...mergedKeys, ...keysToRefetch];
  }

  if (Array.isArray(refetch) && refetch.length > 0) {
    mergedKeys = [...mergedKeys, ...refetch];
  }

  return mergedKeys;
};

// Merge usage and definition options, with usage options taking precedence
const mergeOptions = <T, TError = unknown>(
  usageOptions?: UseMutationOptions<T, TError, PayloadType, unknown>,
  definitionOptions?: UseMutationOptions<T, TError, PayloadType, unknown>,
) => {
  const mergedOptions = {
    ...definitionOptions,
    ...usageOptions,
  };

  return mergedOptions as UseMutationOptions<T, TError, PayloadType, unknown>;
};
