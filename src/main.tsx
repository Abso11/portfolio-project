import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from 'routes';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);

root.render(
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);
