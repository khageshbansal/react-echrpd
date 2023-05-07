import React,{useContext} from 'react';
import { MyContext } from './CartContext';
export default function CartContent(props) {

  let itemObj = useContext(MyContext);
  let itemArray = itemObj.items;


  function deleteCartHandeler(id){
    itemObj.removeItem(id);
  }
  return (
    <>
  {itemArray.map((item) => {
                    return (
                      <tr>
                        <th scope="row">1</th>
                        <td>
                          <img
                            src={item.imageUrl}
                            style={{"height":"60px"}}
                          ></img>
                        </td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        {/* <td>${cart[i].cartItem.quantity}</td>
          <td>${ (cart[i].cartItem.quantity) * (cart[i].price) }</td> */}

          <td> <button onClick={deleteCartHandeler(item.id)}>X</button></td>
                      </tr>
                    );
                  })}
    </>
  )
}
