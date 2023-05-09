import React from 'react';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Forgot from './pages/Forgot';
import Profile from './pages/Profile';
import { Link } from 'react-router-dom';
import { ContextProvider } from './components/CartContext';
import { AuthProvider } from './components/AuthContext';
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
    <AuthProvider>
      <ContextProvider>
        <main>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot" element={<Forgot />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/productDetails/:id" element={<ProductDetails />} />

              <Route path="*" element={NotFound} />
            </Routes>
          </BrowserRouter>
        </main>

        <Footer />
      </ContextProvider>
      </AuthProvider>
    </>
  );
}
