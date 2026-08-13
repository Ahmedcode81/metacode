import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { LanguageProvider } from './i18n/LanguageContext';
import { CartProvider } from './services/cartStore';
import { RestaurantDataProvider } from './services/RestaurantDataContext';
import { ToastProvider } from './services/ToastContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LanguageProvider>
      <RestaurantDataProvider>
        <CartProvider>
          <ToastProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ToastProvider>
        </CartProvider>
      </RestaurantDataProvider>
    </LanguageProvider>
  </React.StrictMode>
);
