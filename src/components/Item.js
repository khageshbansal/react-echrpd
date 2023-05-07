import React, { useContext } from 'react';
import { MyContext } from './CartContext';
import { Link } from "react-router-dom";
export default function Item(prop) {
  let itemObj = useContext(MyContext);
  function HadleAddToCartButton() {
    let curitem = prop.item;
    itemObj.addItem(curitem);
  }
  return (
    <>
      <div class="card m-2" id={prop.item.id}>
        <img
          style={{ height: '250px', width: '250px' }}
          src={prop.item.imageUrl}
          class="card-img-top"
          alt=""
        />

        {/* <img src={prop.item.imageUrl} class="card-img-top" alt="" /> */}
        <div class="card-body">
          <h5 class="card-title">{prop.item.title}</h5>
          <h4 class="card-title price">
            Price: <span class="price">{prop.item.price}</span>
          </h4>

          <div class="d-flex flex-wrap justify-content-around">
          <a class="btn btn-primary" onClick={HadleAddToCartButton}>
            Add to Cart
          </a>

          <Link class="btn btn-primary" to= {`/productDetails/${prop.item.id}`}>  View <i class="fas fa-search"></i></Link>

          
          </div>
        </div>
      </div>
    </>
  );
}
