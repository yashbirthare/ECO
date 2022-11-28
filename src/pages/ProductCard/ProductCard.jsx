import React from "react";
import "./ProductCard.css"

export function ProductCard({price,title,image,description}) {
  return (
    <div className="imageList">
  <div>
       <img src={image} alt="" />
    </div>
    <div>{title}</div>
    <div>{price}</div>


    <div>{title}</div>
    <div>{description}</div>
    



   
    
    </div>
  );
}
