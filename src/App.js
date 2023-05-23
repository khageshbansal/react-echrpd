import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Forgot from './pages/Forgot';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import store from './redux/store';

export default function App() {
  const isAuthenticated = store.getState().auth.isLogged;

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />

          {isAuthenticated ? (
            <>
              <Route path="/profile" element={<Profile />} />
              <Route path="/shop" element={<Shop />} />
            </>
          ) : null}

          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}
