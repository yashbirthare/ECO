import React from "react";
import "./ProductCard.css"

 function ProductCard({tittle,description,price,category,processor,qty,new_arrival,original_price,discount,rate,count,image }) {

  return (
    <div id="item-list">
  <div>
  <p>{new_arrival && <div className="product-new">new</div> }</p>
       <img className="image-items" src={image} alt="" />
       
       <div className="btn-tag"> 
      <button className="Cart-btn">ADD TO CART</button>
      <button className="Buy-btn" >BUY NOW</button>
      </div>
    </div>

    
    <div id="productCard-main">
    <p className="titel-tag">{tittle}</p>
    <p className="description-tag">{description}</p>
    <div className="last-Item">
    <p>{category}</p>
    <p>{processor}</p>
    </div>

<div id="rating-main">
    <div className="rating">
    <p>{count}</p>
    <p>.{rate}☆</p>
  </div>

  <p className="Reviews">783 Ratings & 76 Reviews</p>
</div>
    <div id="price">
    <p className="pro-price">{price}</p>
    <s> <p className="ori-price">{original_price}</p></s>
    <p className="dis-price">{discount}%off</p>
  
    </div>
    <p className="qty">Hurry, Only {qty} left!</p>

   
    

     </div>
    </div>
  );
}

export {ProductCard}
