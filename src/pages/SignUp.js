import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp(props) {
  return (
    <>
     
  <h1>Sign-Up Page</h1>
    
   
    <div class="container">
        <div class="d-flex justify-content-center align-items-center vh-100 ">

    <form class='' onclick="signup(event)">
        <div class="form-group">
            <label for="name">Name</label>
            <input required="required" type="name" class="form-control" id="name" placeholder="Name"/>
          </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input  type="email" class="form-control" id="email"  placeholder="Enter email"/>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password"/>
        </div>
      
        
        <button type="button" class="btn btn-primary">Sign-Up</button>
        <small ><a href="login.html">Existing User Login</a></small>
      </form>

      </div>
      </div>
    </>
  );
}
