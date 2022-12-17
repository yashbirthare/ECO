import React from "react";
import "./ProductCard.css"

 function ProductCard({tittle,description,price,category,processor,qty,new_arrival,original_price,discount,rate,count,image }) {
  return (
    <div id="item-list">
  <div>
  <p>{new_arrival && <div className="product-new">new</div> }</p>
       <img src={image} alt="" />
       
       <div className="btn-tag"> 
      <button className="Cart-btn">ADD TO CART</button>
      <button className="Buy-btn" >BUY NOW</button>
      </div>
    </div>

    
    <div id="productCard-main">
    <p className="titel-tag">{tittle}</p>
    <p className="description-tag">{description}</p>
    <p className="product-price">{price}</p>
    <div className="all-Items">
    <p>{category}</p>
    <p>{processor}</p>
    <p>{qty}</p>

    <p>{original_price}</p>
    <p>{discount}</p>
     <p>{rate}</p>/ 
     <p>{count}</p>
     </div>  
     </div>
    </div>
  );
}

export {ProductCard}
