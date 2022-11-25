import "./App.css";
import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Routes,Route } from "react-router-dom";
import ProductStore from "./pages/ProductStore/ProductStore"
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";


const App = () => {
  
  return (
    <div>
    <div> <Header /></div>
    <div>  <Navbar/></div>
   
  


  <Routes>
   <Route path="/" element={<Home />} /> 
   <Route path="/ProductStore" element={<ProductStore />}/>
   <Route path= "/ProductDetail/:productId" element={<ProductDetail/>}/>
  </Routes>





    </div>
  )
}

export default App
