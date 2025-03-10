import React from "react";
import "./index.css";
import App from "./App";
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from "react-redux"
import store from './redux/store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>,
  </Provider>
);
