import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { z } from 'zod';

const t = initTRPC.create({
  transformer: superjson,
});

export const appRouter = t.router({
  hello: t.procedure.query(({ ctx }) => {
    return { hello: 'world' };
  }),
});
export type AppRouter = typeof appRouter;
