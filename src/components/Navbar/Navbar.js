
import React from 'react'
import { BsPersonFill } from 'react-icons/bs';
import { ImCart } from "react-icons/im";
import { IoMdHeart } from "react-icons/io";
import { Link } from 'react-router-dom';
import  laptop  from "../../Assets/images/laptop.jpg";


import "./Navbar.css"


const Navbar = () => {
  return (
    
<div className='navigation'>
<img className='laptoplogo' src={laptop} alt=""/>
<Link className='link2' to="/"><h6 className="brand" >Eco-<span className='brand1'>Store</span></h6></Link>
<div>

<input  className='input'
placeholder='search on Eco-Store      💻'/>
</div>

<div className='icons'>
<div className='icons1'><BsPersonFill/></div>
<div className='icons1'><ImCart/></div>
<div className='icons1'><IoMdHeart/></div>
</div>

<button className='btn'>log out</button>


</div>

  )
}

export default Navbar 
