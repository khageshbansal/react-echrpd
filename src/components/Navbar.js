import React, {  } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Link ,useNavigate} from 'react-router-dom';
import { login, logout } from '../redux/authSlice'
import { addItem, removeItem, updateItem } from '../redux/cartSlice'



import CartModal from './CartModal';
export default function Navbar(props) {
  const dispatch = useDispatch()
  let navigate=useNavigate();
  
  let itemArray = useSelector((state) => state.cart.items)
  let isLogged = useSelector((state) => state.auth.isLogged);


  // console.log(itemArray);
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Ecom-Shop
          </Link>
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
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              {isLogged && (
                <li class="nav-item">
                  <Link class="nav-link" to="shop">
                    Shop
                  </Link>
                </li>
              )}
              {!isLogged && (
                <li class="nav-item">
                  <Link class="nav-link" to="about">
                    About
                  </Link>
                </li>
              )}
              {isLogged && (
                <li class="nav-item">
                  <Link class="nav-link" to="orders">
                    Orders
                  </Link>
                </li>
              )}
              {!isLogged && (
                <li class="nav-item">
                  <Link class="nav-link" to="contact">
                    Contact Us
                  </Link>
                </li>
              )}
            </ul>

            {/* Button trigger modal */}

            {isLogged ? (
              <>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link class="nav-link" to="profile">
                      Profile
                    </Link>
                  </li>
                </ul>

                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  Cart {itemArray.length}
                </button>

                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {dispatch(logout());navigate('/')}
                  }
                >
                  LogOut
                </button>
              </>
            ) : (
              <>
                <Link class="btn btn-primary m-2" to="/login">
                  Login
                </Link>
                <Link class="btn btn-primary" to="/signup">
                  SignUp
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      <CartModal />

      <Outlet />
    </>
  );
}
