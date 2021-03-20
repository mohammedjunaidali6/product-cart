import React from 'react';
import Data from './data.json'

function Cart({cart, removecart}){
    return(
        <>
        <h1>Cart</h1>
        <div className="products">
            {cart.map((post, idx)=>(
                <div className="product" key={idx}>
                     <img src={post.image} />
                     <h2>{post.name}</h2>
                     <h3>{post.price}</h3>
                     <button onClick={()=>removecart(post)}>Remove</button>
                </div>
            ))}  
        </div>
        </>
    )
}
export default Cart;