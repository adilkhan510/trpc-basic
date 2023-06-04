import {
  FetchCreateContextFnOptions,
  fetchRequestHandler,
} from '@trpc/server/adapters/fetch';

import { appRouter } from '@/app/api/trpc/trpc-router';

const handler = (req: Request) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: (opts: FetchCreateContextFnOptions) => {
      return {
        req,
      };
    },
  });
};

export { handler as POST, handler as GET };
