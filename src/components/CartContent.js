import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../redux/cartSlice';

export default function CartContent(props) {
  const dispatch = useDispatch();
  const itemArray = useSelector((state) => state.cart.items);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  if (itemArray.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <>
      {itemArray.map((item, index) => (
        <tr key={item.id}>
          <td>{index + 1}</td>
          <td>
            <img src={item.imageUrl} style={{ height: '60px' }} alt="Item" />
          </td>
          <td>{item.title}</td>
          <td>{item.price}</td>
          <td>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </td>
        </tr>
      ))}
    </>
  );
}
