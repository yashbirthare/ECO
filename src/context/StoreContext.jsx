import { createContext , useContext} from "react" 
import React, { useEffect , useState} from 'react'
import axios from "axios";


const StoreContext = createContext()

function StoreProvider({children}) {

    const [products, setProducts] = useState([]);
    useEffect(() => {
  
      
        (async () => {
          const response = await axios.get("/api/products")
          setProducts(response.data.products)
        })()
    },[])



    return(
    <StoreContext.Provider value={{products, setProducts}}>
        {children}
    </StoreContext.Provider>
    )
}

const useStore = () => useContext(StoreContext);
export {useStore,StoreProvider}