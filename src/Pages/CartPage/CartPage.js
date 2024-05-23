import { useContext, useEffect, useState } from 'react';

import CartContext from '../../Contexts/CartContext';
import './CartPage.css'

function CartPage() {
  const cartParams=useContext(CartContext);
  console.log("cartparams",cartParams)

  const cartId=cartParams.cartid;

  function handleQtyIncrease(itemId,newQuantity){
    cartParams.updateCartItemQuantity(itemId,newQuantity);
  }
      
 
  return (
     <div className='cartpage'>
       <h2>Your Cart!!</h2>
       {cartParams.cartItems.length === 0 ? (
        <p>UH! OH! Your cart is empty.</p>
      ) : (
        <div>
        <ol>
          {cartParams.cartItems.map((item) => (
            <li key={item.id}>
              <div className='d-flex row m-5 mycart'>
                
                  <div className='col-3'> 
                  <img src={item.image.url} className='cart-img'></img>
                  </div>
                  <div className='col-3'>
                  <h3>{item.name}</h3>
                  </div>
                  
                  <div className='col-3'>
                     <h5>Quantity:</h5>
                     </div>
                     <div className='col-3'>
                      <button className='btn btn-dark me-2' onClick={()=>handleQtyIncrease(item.id,item.quantity+1)} >Add</button>
                      <button className='btn btn-dark'onClick={() => handleQtyIncrease(item.id, Math.max(item.quantity - 1, 0))} >Remove</button>
                    
                  </div>
               </div>
              
             </li>
          ))}
        </ol>
        </div>
      )} 
    </div> 
  );
}

export default CartPage;
