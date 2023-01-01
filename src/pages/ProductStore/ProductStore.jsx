import { useStore } from "../../context/StoreContext"
import "./ProductStore.css"

import { Link } from "react-router-dom";

const ProductStore = () => {
  const { products } = useStore();

  return (
    
    <div>
    <div className="ProductStore-Images"> {products.map((product) => 



     <div id="ProductStore-Img1-Main1">
    <Link to={`/ProductDetail/${product.id}`}> <img className='ProductStore-Img1-Main' src={product.image} alt="/"/></Link>
    <div/> 

          <p>{product.tittle}</p>
            <p>{product.processor}</p>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.original_price}</p>
            <p>{product.discount}</p> 
            <p>{product.new_arrival && <div>new</div>}</p>
            <p>{product.qty}</p>
            <p>{product.count}</p>
            <p>.{product.rate}☆</p>
            </div>)} 
            
      </div>
      </div>
  )
}

export default ProductStore




