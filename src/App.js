import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';

import {
  Auth,
  Home,
  About,
  Cart,
  Checkout,
  Error,
  Products,
  SingleProduct,
  PrivateRoute,
} from './pages';
function App() {
  return (
    <Auth>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='cart' element={<Cart />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<SingleProduct />} />
          <Route
            path='checkout'
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </Auth>
  );
}

export default App;
