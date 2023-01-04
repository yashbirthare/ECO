import { useStore } from "../../context/StoreContext"
import "./ProductStore.css"

import { Link } from "react-router-dom";

const ProductStore  = () => {
  const { products } = useStore();

  return (
    
    <div>
    <div id="ProductStore-Main-Area"> {products.map((product) => 


    <div>
     <p>{product.new_arrival && <div className="ProductStore-Item-new">new</div>}</p>
    <Link to={`/ProductDetail/${product.id}`}> <img className='ProductStore-Img1-Main' src={product.image} alt="/"/></Link>
    <div/> 
  


    <div className="ProductStore-Processor-Main">
    <div className="ProductStore-count-Main">
    <p>{product.count}</p>
    <p>.{product.rate}☆</p>
    </div>
    <p className="ProductStore-Processer">{product.processor} </p> 
    <p className="ProductStore-Processer">{product.category}</p>
    </div>

   <div className="ProductStore-tittle-Main">
   <p className="ProductStore-tittle-tag">{product.tittle}</p>
   <p className="ProductStore-description-tag">{product.description}</p>
   </div>
   <div className="ProductStore-Price-Main">
   <p className="ProductStore-pro-price">{product.price}</p>
   <s> <p className="ProductStore-ori-price">{product.original_price}</p> </s>
   <p className="ProductStore-dis-price">{product.discount}%off</p>
   <p className="ProductStore-qty-price">Hurry, Only {product.qty} left!</p>
   
 </div>  

 <div className="ProductStore-Main-BTN"> 
      <button className="ProductStore-Cart-btn">ADD TO CART</button>
      <button className="ProductStore-Buy-btn" >BUY NOW</button>
      </div>

</div>)} 
    
      </div>
      </div>
  )
}

export default ProductStore




