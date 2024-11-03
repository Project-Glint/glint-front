'use client';

import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { globalStyle } from 'styles';

const ClientProviders = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* TODO: ThemeProvider 추가 */}
      <Global styles={globalStyle} />
      {children}
    </QueryClientProvider>
  );
};

export default ClientProviders;
