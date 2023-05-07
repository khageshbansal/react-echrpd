import React, { useState } from 'react';
import Item from './Item';

export default function List() {
  // let dummy = [
  //   {
  //     id: 1,
  //     title: 'Colors',

  //     price: 100,

  //     imageUrl:
  //       'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  //   },

  //   {
  //     id: 2,
  //     title: 'Black and white Colors',

  //     price: 50,

  //     imageUrl:
  //       'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  //   },

  //   {
  //     id: 3,
  //     title: 'Yellow and Black Colors',

  //     price: 70,

  //     imageUrl:
  //       'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  //   },

  //   {
  //     id: 4,
  //     title: 'Blue Color',

  //     price: 100,

  //     imageUrl:
  //       'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  //   },
  // ];

  let [products, setProducts] = useState([]);

  async function fetchProducts() {
    let res = await fetch(
      'https://dummyjson.com/products?limit=10&select=title,price,thumbnail'
    );
    let data = await res.json();

    var newDummy = data.products.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: item.price,
        imageUrl: item.thumbnail,
      };
    });

    setProducts(newDummy);
  }

  fetchProducts();

  console.log(products);
  return (
    <>
   
      <div class="d-lg-flex flex-wrap">
        {products.map((item) => {
          return <Item item={item} />;
        })}
      </div>
      
    </>
  );
}
