import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { theme } from './config/theme.ts';
import { router } from './config/router.tsx';
import { Provider } from 'react-redux'
import { store } from './store/app_store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
  </React.StrictMode>,
)
