import React from 'react';

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
          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
            
          >
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
              onclick="listCart()"
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Cart
            </button>
          </div>
        </div>
      </nav>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                My Cart
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>

              <h4 class="text-center">
                TOTAL : <span id="total"></span>
              </h4>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button class="btn btn-primary" onclick="order()">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
