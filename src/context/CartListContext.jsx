import { createContext, useContext, useReducer } from "react";

const CartListContext = createContext();
const useCartList = () => useContext(CartListContext)



const CartListProvider = ({children}) => {

const [state,dispatch] = useReducer(cartListFun,{cartList:[]})   


function cartListFun(state,action) {
    switch(action.type){
    case "Add_To_CartList":
    const data = state.cartList.find((item) => item.id === action.payload.id)
    if (data){
     alert("data is already present in cartlist")
    }else{
      return {...state, cartList: [...state.wishList , action.payload]}
    }
    
    case "REMOVE_To_CartList":
    return {...state, cartList: state.cartList.filter((crt) => crt.id !== action.id)}

    default:
        return state
    }
}



    return(
        <CartListContext.Provider value={{state,dispatch}}>
            {children}
        </CartListContext.Provider>
    )
}

export{useCartList,CartListProvider}



