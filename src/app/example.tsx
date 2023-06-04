'use client';

import { trpc } from '@/utils/trpc';
import React from 'react';

export default function FetchHello() {
  const { data, isLoading, isFetching } = trpc.hello.useQuery();
  const { data: ByeData } = trpc.bye.useQuery({
    name: 'YOUNG DELLY',
  });

  if (isLoading || isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: 20,
      }}
    >
      {ByeData?.bye}
    </div>
  );
}
