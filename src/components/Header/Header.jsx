import { IoIosHelpCircle} from 'react-icons/io';
import { AiFillGift} from 'react-icons/ai';
import { FaMapMarkerAlt} from 'react-icons/fa';

import React from 'react'
import "./header.css"




const header = () => {
  return (
<div id='header-main'>
 <p className='sale1'>Eco-Store's Pink Friday Sale is on!!!</p>
 <p className='event'><AiFillGift/> Store & Events | <FaMapMarkerAlt/> Gift Card | <IoIosHelpCircle />Help</p>
 </div>
  )
}



export default header