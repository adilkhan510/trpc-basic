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
  bye: t.procedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(({ input }) => {
      return { bye: input.name };
    }),
});
export type AppRouter = typeof appRouter;
