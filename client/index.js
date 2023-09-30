import React from 'react';
import { render } from 'react-dom';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './app'

  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )


// render(<App/>, document.getElementById('root'))

