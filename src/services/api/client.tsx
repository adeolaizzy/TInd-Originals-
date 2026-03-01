/**
 * External imports
 */
import { QueryClient } from '@tanstack/react-query';

/**
 * Configure react-query query client
 */
export const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failure, _error: unknown) => {
        if (failure > 0) {
          return false;
        }
        return true;
      },
      refetchOnWindowFocus: false,
    },
  },
});
