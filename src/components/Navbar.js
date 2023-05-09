import React, { useContext } from 'react';
import { MyContext } from './CartContext';
import { MyContext as AuthContext}  from './AuthContext';
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
  
import CartModal from './CartModal';
export default function Navbar(props) {
  let itemObj = useContext(MyContext);
  let itemArray = itemObj.items;

  let isLogged = useContext(AuthContext).isLogged;
  // console.log(isLogged);
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
            
                <Link class="nav-link" to="/">Home</Link>
                  
              </li>
              {isLogged && <li class="nav-item">
              <Link class="nav-link" to="shop">Shop</Link>
              </li>}
              <li class="nav-item">
              <Link class="nav-link" to="about">About</Link>
              </li>
              {isLogged && <li class="nav-item">
              <Link class="nav-link" to="orders">Orders</Link>
              </li>}
              <li class="nav-item">
              <Link class="nav-link" to="contact">Contact Us</Link>
              </li>
            </ul>

            {/* Button trigger modal */}

            {isLogged && <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Cart {itemArray.length}
            </button>}
          </div>
        </div>
      </nav>
<CartModal/>

<Outlet/>
    </>
  );
}
