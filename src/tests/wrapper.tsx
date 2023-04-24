import { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { theme } from 'styles';
import 'jest-styled-components';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  },
  logger: {
    // eslint-disable-next-line no-console
    log: console.log,
    // eslint-disable-next-line no-console
    warn: console.warn,
    error: () => {}
  }
});

afterEach(() => {
  queryClient.clear();
});

type IProviders = {
  children: ReactNode;
};

const Providers = ({ children }: IProviders) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <>{children}</>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
