import {useWishList} from "../../context/wishlistContext"

const WishList = () => {

 const {state} = useWishList();   
 const {wishList} = state;

const getWishlistProduct = (item) => {
    const {new_arrival,image,tittle,processor,category,price,original_price,discount,qty} = item
    return (
        <div>
        
       <div>
       <p>{new_arrival && <div>new</div>}</p>
        <h1>{tittle}</h1>
        <img src={image} alt="/"/>
       </div> 
        <h2>{processor}</h2>
        <h2>{category}</h2>
        <p>{price}</p>
        <s>{original_price}</s>
        <p>{discount}</p>
        <p>{qty}</p>
        </div>

        
    )
}


    return(
        <div>
        {wishList.map(getWishlistProduct)}
        </div>
    )
}


export default WishList