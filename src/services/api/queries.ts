import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import qs from 'query-string';

import { createApiRequest } from './createRequest';

const keysToRemoveFromQueryKey = ['sort_ascending'];

export interface DefinitionOptions<TQueryFnData = unknown, TError = Error, TData = TQueryFnData> {
  key: ((arg: string) => string[]) | string[];
  url: string;
  options?: Partial<UseQueryOptions<TQueryFnData, TError, TData, readonly unknown[]>>;
}

export interface UsageOptions<TData> {
  queryParams?: Record<string, string>;
  pathParams?: Record<string, string | number>;
  enabled?: boolean;
  onSuccess?: (data: TData, ...args: Record<string, unknown>[]) => void;
}

const buildUrlWithParams = (
  url: string,
  pathParams?: Record<string, string | number>,
) => {
  if (!pathParams) return url;
  return Object.keys(pathParams).reduce(
    (updatedUrl, key) => updatedUrl.replace(`:${key}`, String(pathParams[key])),
    url,
  );
};

export const createQuery = <TQueryFnData, TError = Error, TData = TQueryFnData>(
  definitionOptions: DefinitionOptions<TQueryFnData, TError, TData>,
) => {
  const useQueryFn = (usageOptions?: UsageOptions<TData>) => {
    const { url, key } = definitionOptions;
    const { queryParams = {}, pathParams, ...rest } = usageOptions || {};

    const mergeOptions = {
      ...definitionOptions.options,
      ...rest,
    };

    const transformedFilters = transformFiltersToKey({ ...queryParams });
    const keyParams = transformedFilters
      ? qs.stringify(transformedFilters)
      : '';
    const queryKey = typeof key === 'function' ? key(keyParams) : key;
    const finalUrl = buildUrlWithParams(url, pathParams);

    return useQuery<TQueryFnData, TError, TData, readonly unknown[]>({
      queryKey: [...queryKey, pathParams],
      queryFn: () =>
        createApiRequest<TQueryFnData>({
          url: finalUrl,
          queryParams: qs.stringify(queryParams),
          method: 'GET',
        }),
      ...mergeOptions,
    } as UseQueryOptions<TQueryFnData, TError, TData, readonly unknown[]>);
  };

  return useQueryFn;
};

const transformFiltersToKey = (filters: Record<string, string>) => {
  keysToRemoveFromQueryKey.forEach((key) => {
    delete filters[key];
  });
  return filters;
};
