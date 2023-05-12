import { createContext, useContext, useReducer } from "react";

const WishListContext = createContext();
const useWishList = () => useContext(WishListContext);


const WishListProvider = ({children}) => {

   const [state, dispatch] = useReducer(reducerFun,{wishList:[]}) 
   
   console.log(state)
    
    function reducerFun (state, action)  {
        console.log( "payload", action.payload)
        switch(action.type){
           case "Add_To_WishList":
           const data = state.wishList.find((item) => item.id === action.payload.id)
           if(data){
              alert('data is already present in wishlist')
           }else {
            return {...state, wishList: [...state.wishList , action.payload]}
           }
           
           case "REMOVE_To_WishList":
           return {...state, wishList: state.wishList.filter((Wis) => Wis.id !== action.id )}

        default:
            return state;
        }
       
       }
    return(
    <WishListContext.Provider value={{state,dispatch}}>
        {children}
    </WishListContext.Provider>
    )
}

export {useWishList,WishListProvider}