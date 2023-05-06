import React from 'react';


export default function Item(prop) {
  return (
    <>
      
    <div class="card m-5" id={prop.item.id} >
      {/* <img style={{"height" : "250px", "width" : "250px"}} src={prop.item.imageUrl} class="card-img-top" alt=""/> */}

      <img src={prop.item.imageUrl} class="card-img-top" alt=""/>
      <div class="card-body">
        <h5 class="card-title">{prop.item.title}</h5>
         <h4 class="card-title price">Price: <span class="price">{prop.item.price}</span></h4>
         <a href="#" class="btn btn-primary"  onclick="alert('product added')">Add to Cart</a>
      </div>
   </div>

    </>
  );
}
