import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

// Auth0
// Domain :  dev-y2da0aijaxmys3gl.us.auth0.com

// Client ID : o94gwBizIIXEkndC6kxBEAmPwzKDMDw9
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain='dev-y2da0aijaxmys3gl.us.auth0.com'
    clientId='o94gwBizIIXEkndC6kxBEAmPwzKDMDw9'
    redirectUri={window.location.origin}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
