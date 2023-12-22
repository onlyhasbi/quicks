import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import dayjs from 'dayjs';
import * as locale from 'dayjs/locale/id';
import { I18nProvider } from 'react-aria';
import './index.css';

dayjs.locale(locale);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nProvider locale="id-ID">
      <App />
    </I18nProvider>
  </React.StrictMode>
);
