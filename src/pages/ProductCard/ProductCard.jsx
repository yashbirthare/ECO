import React from "react";
import "./ProductCard.css"

 function ProductCard({tittle,description,price,category,processor,qty,new_arrival,original_price,discount,rate,count,image }) {

  return (
    <div id="item-list">
  <div>
  <p>{new_arrival && <div className="product-new">new</div> }</p>
       <img className="image-items" src={image} alt="" />
       
       <div> 
      <button className="Cart-btn">ADD TO CART</button>
      <button className="Buy-btn" >BUY NOW</button>
      </div>
    </div>

    
    <div id="productCard-main">
    <p className="titel-tag">{tittle}</p>
    <p className="description-tag">{description}</p>


    <div className="last-Item">
    <p className="off-Ex">Extra ₹10000 off</p>
    <p className="category">{category}</p>
    <p className="category">{processor}</p>
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
    <p className="qty">Hurry, Only {qty} left!</p>
</div>


    <div id="offers">
    <h4 className="offers-A">Available offers</h4>
    <p className="offers-p">
    🏷️Bank Offer10% off on Kotak Bank Credit Cards and Credit EMI Trxns, up to ₹1,250. On orders of ₹5,000 and above<span className="T-C">T&C</span></p>
    <p className="offers-p">
    🏷️Bank Offer10% instant discount on SBI Credit Card EMI Transactions, up to ₹1,250 on orders of ₹5,000 and above<span className="T-C">T&C</span></p>
    <p className="offers-p" >
    🏷️Bank Offer10% off on Kotak Bank Debit Card Transactions, up to ₹500. On orders of ₹5,000 and above<span className="T-C">T&C</span></p>
    <p className="offers-p">🏷️FreebieAirtel Xstream Entertainment Plan<span className="T-C">T&C</span></p>
    </div>
     </div>
    </div>
    
  );
}
export {ProductCard}
