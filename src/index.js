import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom"
import { StoreProvider } from "./context/StoreContext"
import { CounterProvider } from "./context/PriceContext";
// Call make Server
makeServer();

ReactDOM.render(
   
<React.StrictMode>
<BrowserRouter>
<StoreProvider>
<CounterProvider>
    <App />
</CounterProvider>
</StoreProvider>    
</BrowserRouter>
</React.StrictMode>,
  document.getElementById("root")
);
