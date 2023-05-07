import React from 'react';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';
import ContactUs from './pages/ContactUs';
import { Link } from 'react-router-dom';
import { ContextProvider } from './components/CartContext';

import { createBrowserRouter, RouterProvider,Route, Routes,BrowserRouter} from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: (
      <h1>
        Page not Found
        <Link class="btn btn-primary" to="/">
          Go to HomePage
        </Link>
      </h1>
    ),
    children: [
      { path: '/', element: <Home /> },
      { path: '/shop', element: <Shop /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <ContactUs /> },
      // { path="/productDetails/:id ", element: <ContactUs /> },
     
    ],
  },
]);

export default function App() {
  return (
    <>
      <ContextProvider>
        <main>
          <RouterProvider router={router} />
          <BrowserRouter>
          <Routes>
      <Route path="/productDetails/:id" element={<ProductDetails />} />
    </Routes>
    </BrowserRouter>
        </main>

      <Footer/>
      </ContextProvider>
    </>
  );
}
