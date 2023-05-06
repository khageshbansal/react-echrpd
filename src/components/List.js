import React from 'react';
import Item from './Item';

export default function List() {
  let dummy = [
    {
      title: 'Colors',

      price: 100,

      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },

    {
      title: 'Black and white Colors',

      price: 50,

      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },

    {
      title: 'Yellow and Black Colors',

      price: 70,

      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },

    {
      title: 'Blue Color',

      price: 100,

      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
  ];

  return (
    <>
      {dummy.map((item) => {
        return <Item item={item} />;
      })}
    </>
  );
}
