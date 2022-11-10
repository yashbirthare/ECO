import React, { useEffect , useState} from 'react'
import axios from "axios";
import "./ProductStore.css"


const ProductStore = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {

    
      (async () => {
        const response = await axios.get("/api/products")
        setProducts(response.data.products)
      })()
  },[])



  return (
    <div className="main-divs">
    <div className='product-line'> {products.map((product) => 
      <div className='div-img'><div> <img className='img' src={product.image}/></div>
    <div className='list'>  <li> {product.tittle} </li>
            {/* <li className='dis'> {user.description} </li>  */}
            <li> {product.processor }</li>
            <li> {product.category}</li>
            <li> {product.price}</li>
            <li> {product.qty}</li>
            <li>{product.original_price}</li>
            <li>{product.discount}</li> 
            <li>{product.rating.rate}</li>
            <li>{product.rating.count}</li>
            </div>
      </div>
      )
    } </div>
    </div>
   
  )
}

export default ProductStore