
import React from 'react'
import { BsPersonFill } from 'react-icons/bs';
import { ImCart } from "react-icons/im";
import { IoMdHeart } from "react-icons/io";
import { Link } from 'react-router-dom';
import  laptop  from "../../Assets/images/laptop.jpg";
import "./Navbar.css"



const Navbar = () => {
  return (
    
<div id='navigation'>

<div className='brand-icon'>
<img src={laptop} alt=""/>
<Link className='link2' to="/"><h1 className="Eco" >Eco-<span className='Store'>Store</span></h1></Link>
</div>


<input  className='input'
placeholder='search on Eco-Store      💻'/>


<div id='icons'>
<p className='icons-1'><BsPersonFill/></p>
<p className='icons-1'><ImCart/></p>
<p className='icons-1'><IoMdHeart/></p>
<button className='btn'>log out</button>
</div>

</div>
  )
}

export default Navbar 
