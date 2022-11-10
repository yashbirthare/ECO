import "./App.css";
import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Routes,Route } from "react-router-dom";
import ProductStore from "./pages/ProductStore/ProductStore"


const App = () => {
  
  return (
    <div>
    <Header />
    <Navbar/>


  <Routes>
   <Route path="/" element={<Home />} /> 
   <Route path="/ProductStore" element={<ProductStore />}/>
  </Routes>





    </div>
  )
}

export default App
