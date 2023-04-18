import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Routes from 'routes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'styles';
import { worker } from 'mocks/browser';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root') as Element);

worker.start();

root.render(
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      <GlobalStyle />
      <Routes />
    </QueryClientProvider>
  </ThemeProvider>
);
