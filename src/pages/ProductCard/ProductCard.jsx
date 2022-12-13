import React from "react";
import "./ProductCard.css"

export function ProductCard({tittle,description,price,category,processor,qty,new_arrival,original_price,discount,rating,image }) {
  return (
    <div className="item-list">
  <div className="image-tag">
       <img src={image} alt="" />
       
       <div className="btn-tag"> 
      <button className="Cart-btn">ADD TO CART</button>
      <button className="Buy-btn" >BUY NOW</button>
      </div>
    </div>

    
    <div>
    <p className="titel-tag">{tittle}</p>
    <p className="description-tag">{description}</p>
    <p>{price}</p>
    <p>{category}</p>
    <p>{processor}</p>
    <p>{qty}</p>
    <p>{new_arrival && <div>new</div> }</p>
    <p>{original_price}</p>
    <p>{discount}</p>
     <p>{rating.rate}</p> 
     <p>{rating.count}</p>  
     </div>

  
     
     
    </div>
  );
}
