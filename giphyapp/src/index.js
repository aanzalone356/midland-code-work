import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './styled/themes/ThemeProvider';
import StateProvider from './context/index';
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider client = {queryClient}>
        <StateProvider>
          <App />
        </StateProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
reportWebVitals();
