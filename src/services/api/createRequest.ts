/**
 * External imports
 */
import { AxiosResponse, ResponseType } from 'axios';

/**
 * Local imports
 */
import Axios from './instance';

interface createRequest {
  url: string;
  queryParams?: string;
  data?: Record<string, unknown> | FormData;
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';
  apiOptions?: {
    responseType?: ResponseType;
    headers?: Record<string, string>;
  };
}

/**
 * Api request generator (uses Next.js internal proxy)
 */
export const createApiRequest = async <TData>(
  options: createRequest,
): Promise<TData> => {
  const { url, queryParams, method, data, apiOptions = {} } = options;
  // Normalize the provided path and strip a leading "/api" if present
  const rawPath = url.startsWith('/') ? url : `/${url}`;
  const normalizedPath = rawPath.replace(/^\/api\//, '/');
  const fullUrl = `${normalizedPath}${queryParams ? `?${queryParams}` : ''}`;

  /**
   * ✅ In non-staging/prod, route requests through Next.js API proxy:
   *    "/api/proxy/v1/user-management/auth/login"
   *    (backend base already includes "/api")
   */
  const isBrowserLocalhost =
    typeof window !== 'undefined' && window.location.hostname === 'localhost';
  const env = import.meta.env.NEXT_PUBLIC_ENV ?? '';
  const useProxy = isBrowserLocalhost || (env !== 'staging' && env !== 'prod');

  // if using proxy, prepend /api/proxy to route through Next.js
  const baseUrl = useProxy ? '/api' : '';
  const finalUrl = `${baseUrl}${fullUrl}`;

  const response = await Axios({
    url: finalUrl,
    method,
    ...(data ? { data } : {}),
    ...apiOptions,
  })
    .then((response: AxiosResponse<TData>) => response.data)
    .catch((error) => {
      // you can add toast or logging here
      throw error;
    });

  return response;
};
