import React from 'react';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';
import ContactUs from './pages/ContactUs';
import { Link } from 'react-router-dom';
import { ContextProvider } from './components/CartContext';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';

export default function App() {
  return (
    <>
      <ContextProvider>
        <main>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/productDetails/:id" element={<ProductDetails />} />

              <Route path="*" element={NotFound} />
            </Routes>
          </BrowserRouter>
        </main>

        <Footer />
      </ContextProvider>
    </>
  );
}
