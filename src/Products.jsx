import React from 'react';
import Data from './data.json';
function Products({addcart}){
    return(
     <>
        <h1>Production</h1>
         <div className="products">
            {Data.map((post, idx ) =>(
                    <div className="product" key={idx}>
                        <img src={post.image} />
                        <h2>{post.name}</h2>
                        <h3>{post.price}</h3>
                        <button onClick={()=>addcart(post)}>Add to Cart</button>
                    </div>
            ))}
        </div>
     </>     
    )
}
export default Products;