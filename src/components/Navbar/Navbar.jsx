
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

<div className='brandlogo'>
<img className='laptoplogo' src={laptop} alt=""/>
<Link className='link2' to="/"><h1 className="brand" >Eco-<span className='brand1'>Store</span></h1></Link>
</div>


<input  className='input'
placeholder='search on Eco-Store      💻'/>


<div className='icons'>
<h1 className='icons1'><BsPersonFill/></h1>
<h1 className='icons1'><ImCart/></h1>
<h1 className='icons1'><IoMdHeart/></h1>
<button className='btn'>log out</button>
</div>

</div>
  )
}

export default Navbar 
