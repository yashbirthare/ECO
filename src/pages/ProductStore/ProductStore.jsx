import { useStore } from "../../context/StoreContext"
import "./ProductStore.css"

import { Link } from "react-router-dom";

const ProductStore = () => {
  const { products } = useStore();

  return (
    
    <div id="ProductStore-Main">
    <div className="ProductStore-Images"> {products.map((product) => 

      <div>
    <Link to={`/ProductDetail/${product.id}`}> <img className='img' src={product.image} alt="/"/></Link> 
          
            <div id="ProductStore-Images-Details-Main">

          <div className="ProductStore-Details-Main-PC">
          <p className="List-Main1">{product.processor}</p>
          <p className="List-Main1">{product.category}</p>
          </div>
         

         <div className="ProductStore-Details-Main-li">
            <p className="List-Main-Li">{product.price}</p>
            <p className="List-Main-Li"> <s>{product.original_price} </s></p>
            <p className="List-Main-Li">{product.discount}</p> 
        </div>
            </div>
            <p className="List-Main-Li">{product.qty}</p>

            </div>)} 
            
      </div>
      </div>
  )
}

export default ProductStore




