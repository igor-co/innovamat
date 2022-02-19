import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';

import './index.scss';

import { App } from './App';

render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
