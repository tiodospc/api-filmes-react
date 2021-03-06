import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import { i18n } from 'element-react'
import locale from 'element-react/src/locale/lang/en'
import 'element-theme-default';

i18n.use(locale);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

