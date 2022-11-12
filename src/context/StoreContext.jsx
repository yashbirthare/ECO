import { createContext, useContext} from "react"

const  StoreContext = createContext ()


function StoreProvider ({Children}) {

<StoreContext.Provider>
    {Children}
</StoreContext.Provider>

}

 useStore = () => useContext(StoreContext);

export {useStore, StoreProvider} ;