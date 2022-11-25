import React from "react";
import "./ProductCard.css"

export function ProductCard({price,title,image,description}) {
  return (
    <div className="imageList">
    <div>
        {image}
    </div>
    <div>{title}</div>
    <div>{price}</div>
    <div>ashuuuuuuuuuuuuuuuuuuuuuuuu</div>
    <div>ashuuuuuuuuuuuuuuuuuuuuuuuu</div>

    <div>{title}</div>
    <div>{description}</div>
    <div>
       <img src={image} alt="" />
    </div>



   
    
    </div>
  );
}
