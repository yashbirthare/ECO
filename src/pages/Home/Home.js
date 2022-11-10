import MainBanner1 from "../../Assets/images/MainBanner1.png"
import Banner2 from "../../Assets/images/Banner2.png"
import Banner3 from "../../Assets/images/Banner3.png"
import Banner4 from "../../Assets/images/Banner4.png"
import laptop1 from "../../Assets/images/laptop1.jpg"
import laptop2 from "../../Assets/images/laptop2.jpg"
import laptop3 from "../../Assets/images/laptop3.jpg"
import laptop4 from "../../Assets/images/laptop4.jpg"
import laptop5 from "../../Assets/images/laptop5.jpg"
import laptop6 from "../../Assets/images/laptop6.png"
import laptop7 from "../../Assets/images/laptop7.png"
import laptop8 from "../../Assets/images/laptop8.png"
import laptop9 from "../../Assets/images/laptop9.png"
import laptop10 from "../../Assets/images/laptop10.png"
import logo from "../../Assets/images/logo.png"
import logo1 from "../../Assets/images/logo1.png"
import logo2 from "../../Assets/images/logo2.png"
import logo3 from "../../Assets/images/logo3.png"
import logo5 from "../../Assets/images/logo5.png"
import logo7 from "../../Assets/images/logo7.png"
import "./Home.css"
import React from 'react'
import { Link } from "react-router-dom"




export const Home = () => {
  return (
    <div className="home">

    <div className="brands3">
    <h6 className="Lapbrand">DELL</h6>
    <h6 className="Lapbrand">HP</h6>
    <h6 className="Lapbrand">MSI</h6>
    <h6 className="Lapbrand">ASUS</h6>
    <h6 className="Lapbrand">APPLE</h6> 
    </div>
    
    
     
<Link className="Link" to="/ProductStore"><span className="store1">St</span><span className="store">ore</span></Link>

<div><img className="Banner1" src={MainBanner1} alt=""/></div>

<marquee className="marquee" width="100%" direction="left" height="15px"  >
India's Largest Laptop Store 🚀 Friday Sale is on!!! You can easily buy laptops online, with the convenience of sitting at your home. Various brands like Dell, Lenovo, Asus, HP, and Acer offer various models with varied features.
</marquee>

 <div className="laptopimages">
  <div> <img className="laptop1" src={laptop1} alt="" /></div> 
  <div> <img className="laptop1" src={laptop2} alt="" /></div>
  <div> <img className="laptop1" src={laptop3} alt="" /></div>
  <div> <img className="laptop1" src={laptop4} alt="" /></div>
  <div> <img className="laptop1" src={laptop5} alt="" /></div>
</div>

  <div className="categories">
  <h2>📍Laptop Categories!!!  </h2></div>
  <hr className="hr"></hr>
     
<div className="laptopimages1">
<div>
<div> <img className="laptop2 laptop6" src={laptop6} alt="" /></div>
  <h6 className="headtag">Best Buy Gaming🖥️</h6>
  <hr className="hr1"></hr>
  <p className="headline"> 🧿.Gaming laptops typically have better processors, graphics cards, and cooling systems than regular laptops. This makes them ideal for gaming, but it also means they tend to be more expensive.</p>

</div>
<div>
  <div> <img className="laptop2 laptop3"  src={laptop7} alt="" /></div>
  <h6 className="headtag">Best Buy business🖥️</h6>
  <hr className="hr1"></hr>
  <p className="headline"> 🧿.What is a business laptop? A business laptop is designed and intended for company use. Manufacturers optimize business laptops for traveling and longer active periods than personal-use laptops. Consequently, a business laptop will be more efficient in battery life, speed and power to keep up with a 40-hour workweek.</p>
</div>

 <div>
 <div> <img className="laptop2 laptop4" src={laptop8} alt=""/></div>
 <h6 className="headtag">For Multitasking🖥️</h6>
  <hr className="hr1"></hr>
  <p className="headline"> 🧿.multitasking, the running of multiple programs (sets of instructions) in one computer at the same time. Multitasking is used to keep all of a computer's resources at work as much of the time as possible..</p>
 </div> 

<div>
<div> <img className="laptop2 laptop5" src={laptop9} alt=""/></div> 
<h6 className="headtag">For Creators🖥️</h6>
  <hr className="hr1"></hr>
  <p className="headline"> 🧿.A creator laptop is a laptop that has been specifically designed for those who need to tackle heavy-duty content creation tasks. By that, we mean things like video and audio editing, graphic design, game development and more. In fact, anything where you need more power than the typical laptop can provide.</p>
</div>
</div>
<div>
<div> <img className="laptop2 laptop7" src={laptop10} alt=""/></div>
<h6 className="headtag1">premium laptop🖥️</h6>
  <hr className="hr2"></hr>
  <p className="headline1"> 🧿.It means getting a laptop that gives you more high-end components, style and functionality for your money. It means not paying a premium price to get premium and smart features..</p>
</div>
  
 <div className="foterBanner"> 
<div> <img className="Banner2" src={Banner2} alt="" /></div>
<div> <img className="Banner2" src={Banner3} alt="" /></div>
</div>
<div><img className="Banner3"  src={Banner4} alt=""/></div>



<div className="brandlogo">
  <div className="logo-div"> <img className="logo logo1" src={logo} alt="" /></div>
  <div className="logo-div"> <img className="logo" src={logo1} alt="" /></div>
  <div className="logo-div"> <img className="logo hp" src={logo3} alt="" /></div>
  <div className="logo-div"> <img className="logo msi" src={logo2} alt="" /></div>
  <div className="logo-div"> <img className="logo" src={logo7} alt=""/> </div>
  <div className="logo-div"> <img className="logo logo1" src={logo5} alt="" /></div>
</div>


<div className='footer-container' >   
<div className='footer-section'>
<h6 className='footer-subheading'>COMMUNITY</h6> 
<hr></hr>
<p className='footer1'> Eco-Store Reward Program </p>
<p className='footer1'> Forums </p>
<p className='footer1'> Social Media </p>
<p className='footer1'> Videos </p> 
<p className='footer1'> Gaming Teams </p> 
<p className='footer1'> Blogs </p> 
<p className='footer1'> Customer Storie </p> 
</div>



<div  className='footer-section'>
<h6 className='footer-subheading'>SUPPORT</h6>
<hr></hr> 
<p className='footer1'> Downloads</p>
<p className='footer1'> Member Center </p>
<p className='footer1'> Online Customer Service </p>
<p className='footer1'> Service Locations </p> 
<p className='footer1'> Gaming Teams </p> 
<p className='footer1'> Warranty </p> 
<p className='footer1'> India Warranty Condition</p> 
<p className='footer1'> Laptop Service FAQ</p> 
 </div>


<div className='footer-section'>
<h6 className='footer-subheading'>NEWS</h6> 
<hr></hr>
<p className='footer1'>Press Room</p>
<p className='footer1'>Awards</p>
<p className='footer1'>RSS</p></div>




<div  className='footer-section'>
<h6 className='footer-subheading' >MEDIA</h6> 
<hr></hr>
<p className='footer1'>Brochure</p>
<p className='footer1'>Wallpaper</p>
<p className='footer1'>Eco-Store Apps</p>
</div>



<div className='footer-section'>
<h6 className='footer-subheading' >ABOUT US</h6> 
<hr></hr>
<p className='footer1'>About Eco-Store</p>
<p className='footer1'>Mission And Vision</p>
<p className='footer1'>Brand Story</p>
<p className='footer1'>Investor Information</p> 
<p className='footer1'>Innovatio
n DNA</p> 
<p className='footer1'>CSR</p> 
<p className='footer1'>E-waste Management</p> 
<p className='footer1'>TOLL-FREE NO. FOR THE E-WASTE: 1800-11-8976</p> 
<p className='footer1'>TOLL-FREE NO. OF THE RECYCLER: 1800-34-3245</p>  </div>

</div>
</div>
  )
}

export default Home

