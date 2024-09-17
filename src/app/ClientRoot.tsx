'use client';

import { ThemeProvider } from '@mui/material/styles';
import { RecoilRoot } from 'recoil';
import RQProvider from './RQProvider/RQProvider';
import theme from './theme';

const ClientRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <RQProvider>{children}</RQProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default ClientRoot;
