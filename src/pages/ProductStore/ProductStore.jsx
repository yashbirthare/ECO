import { useStore } from "../../context/StoreContext"
import "./ProductStore.css"

import { Link } from "react-router-dom";

const ProductStore = () => {
  const { products } = useStore();



  return (
    <div className="main-divs">
    <div className='product-line'> {products.map((product) => 
      <div className='div-img'><div>
 <Link to={`/ProductDetail/${product.id}`}> <img className='img' alt='' src={product.image}/> </Link>
       </div>
    <div className='list'>  <li> {product.tittle} </li>
            <li> {product.processor }</li>
            <li> {product.category}</li>
            <li> {product.price}</li>
            <li> {product.qty}</li>
            <li>{product.original_price}</li>
            <li>{product.discount}</li> 
            <li>{product.rate}</li>
            <li>{product.count}</li>
            
            </div>
      </div>
      )
    } </div>
    </div>
   
  )
}

export default ProductStore