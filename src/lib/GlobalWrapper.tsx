'use client';

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import StyledComponentsRegistry from './StyledComponentsRegistry';
import { QueryClient, QueryClientProvider } from 'react-query';

// Create a client
const queryClient = new QueryClient();

export const GlobalWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </QueryClientProvider>
    </RecoilRoot>
  );
};
