import React from 'react';
import { Link } from 'react-router-dom';

export default function Login(props) {
  return (
    <>
      <h1>Login Page</h1>

      <div class="container">
        <div class="d-flex justify-content-center align-items-center vh-100">
          <form class="w-25" onclick="login(event)">
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
              />
            </div>

            <button type="button" class="btn btn-primary">
              Login
            </button>
            <small>
              <a href="signup.html">New User Signup</a>
            </small>
            <a href="forgot.html" class="btn btn-primary m-3 ml-5">
              Forgot Password
            </a>
          </form>
        </div>
      </div>
    </>
  );
}
