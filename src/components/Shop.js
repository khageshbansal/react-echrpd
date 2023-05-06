import React from 'react';
import Navbar from './Navbar';
import List from './List';
export default function Shop(props) {
  return (
    <>
      <Navbar />

      <div class="mt-4 p-5 bg-primary text-white rounded">
        <h1 class="text-center">My Store</h1>
      </div>
      <h3 class="text-center mt-2 p-3 bg-light">Products</h3>


<List/>


      {/* <div
        onclick="addToCart(event)"
        class="d-flex justify-content-around"
        id="ul"
      ></div>

      <nav aria-label="..." class="p-1 bg-light">
        <ul
          class="pagination pagination-lg"
          id="pagination"
          onclick="getpagenumber(event)"
        ></ul>
      </nav> */}
    </>
  );
}
