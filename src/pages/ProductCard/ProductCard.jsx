import React from "react";
import "./ProductCard.css"

export function ProductCard({title,description,price,category,processor,qty,new_arrival,original_price,discount,rating,image }) {
  return (
    <div className="item-list">
  <div className="image-tag">
       <img src={image} alt="" />
    </div>
    <div className="titel-tag">{title}</div>
    <div className="description-tag">{description}</div>
    <div>{price}</div>
    <div>{category}</div>
    <div>{processor}</div>
    <div>{qty}</div>
    <div>{new_arrival && <div>new</div> }</div>
    <div>{original_price}</div>
    <div>{discount}</div>
     <div>{rating.rate}</div> 
     <div>{rating.count}</div>  

     <div>
      <button className="Cart-btn">ADD TO CART</button>
      <button className="Buy-btn" >BUY NOW</button>
     </div>
     
    </div>
  );
}
