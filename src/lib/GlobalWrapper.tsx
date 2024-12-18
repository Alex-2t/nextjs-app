'use client';

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import StyledComponentsRegistry from './StyledComponentsRegistry';

export const GlobalWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <RecoilRoot>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </RecoilRoot>
  );
};
