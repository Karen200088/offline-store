import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App';

import { ThemeProvider } from '@/shared/lib/theme/ThemeContext';
import ErrorBoundary from '@/widgets/ErrorBoundary/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root')! as HTMLElement);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js', { scope: './' })
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
