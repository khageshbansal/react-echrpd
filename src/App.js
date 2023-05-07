import React from 'react';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Home from './pages/Home';
import About from './pages/About';
import { Link } from 'react-router-dom';
import { ContextProvider } from './components/CartContext';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
    ],
  },
]);

export default function App() {
  return (
    <>
      <ContextProvider>
        <main>
          <RouterProvider router={router} />
        </main>

        {/* <Shop /> */}
      </ContextProvider>
    </>
  );
}
