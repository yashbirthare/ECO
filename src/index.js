import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom"
import { StoreProvider } from "./context/StoreContext"
import { WishListProvider } from "./context/WishListContext";
import { CartListProvider } from "./context/CartListContext";
// Call make Server
makeServer();

ReactDOM.render(
   
<React.StrictMode>
<BrowserRouter>
<StoreProvider>
<WishListProvider>
<CartListProvider>
    <App />
</CartListProvider>
</WishListProvider>
</StoreProvider>    
</BrowserRouter>
</React.StrictMode>,
  document.getElementById("root")
);
