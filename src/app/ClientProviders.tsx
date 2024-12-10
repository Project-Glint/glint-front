'use client';

import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DialogProvider } from 'components/Dialog';
import { globalStyle, theme } from 'styles';

const ClientProviders = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <DialogProvider>
          <Global styles={globalStyle} />
          {children}
        </DialogProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default ClientProviders;
