import React, { useRef, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { MyContext as AuthContext } from '../components/AuthContext';

export default function Profile(props) {
  let navigate = useNavigate();
  let objAuth = useContext(AuthContext);
  let passwordFilled = useRef();

  let api = 'AIzaSyBG0YW4TEX79NL8kcrR_BDKVCOocGXULcY';

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(data),
    });

    return response.json(); // parses JSON response into native JavaScript objects
  }

  async function submitHandler() {
    console.log(objAuth.token);
    let bodyload = {
      idToken: objAuth.token,
      password: passwordFilled.current.value,
      returnSecureToken: true,
    };

    await postData(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${api}`,
      bodyload
    ).then((data) => {
      // console.log(data);
      if (data.error) alert(data.error.message);
      else {
        alert('Password Reseted Login again');
        objAuth.Logout();
        passwordFilled.current.value = '';
        navigate('/login');
      }
    });
  }

  return (
    <>
      <h1>Your User Profile</h1>

      <div class="container">
        <div class="d-flex justify-content-center align-items-center vh-100">
          <form class="w-25">
            <div class="form-group">
              <label for="password">New Password</label>
              <input
                required
                minLength="6"
                ref={passwordFilled}
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
              />
            </div>

            <button
              onClick={submitHandler}
              type="button"
              class="btn btn-primary"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
