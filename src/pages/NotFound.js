import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound(props) {
  return (
    <>
     <h1>
        Page not Found
        <Link class="btn btn-primary" to="/">
          Go to HomePage
        </Link>
      </h1>
    </>
  );
}
