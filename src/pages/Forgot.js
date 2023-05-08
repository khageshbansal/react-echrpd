import React from 'react';
import { Link } from 'react-router-dom';

export default function Forgot(props) {
  return (
    <>
      <h1>Forgot Password</h1>

      <div class="container">
        <div class="d-flex justify-content-center align-items-center vh-100">
          <form class="w-25">
            <div class="form-group">
              <label for="email">Enter Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>

            <button type="button" class="btn btn-primary" onclick="forgot()">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
