import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { I18nextProvider } from 'react-i18next';
import Routes from 'routes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'styles';
import { worker } from 'mocks/browser';
import i18n from 'utils/i18n';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root') as Element);

worker.start({
  onUnhandledRequest: 'bypass'
});

root.render(
  <I18nextProvider i18n={i18n}>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        <GlobalStyle />
        <Routes />
      </QueryClientProvider>
    </ThemeProvider>
  </I18nextProvider>
);
