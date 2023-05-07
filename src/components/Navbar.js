import React from 'react';
import CartModal from './CartModal';
export default function Navbar(props) {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Ecom-Shop
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="home.html">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="shop.html">
                  Shop
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="orders.html">
                  Orders
                </a>
              </li>
            </ul>

            {/* Button trigger modal */}

            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Cart
            </button>
          </div>
        </div>
      </nav>
<CartModal/>

    </>
  );
}
