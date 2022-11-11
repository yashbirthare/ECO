import { IoIosHelpCircle} from 'react-icons/io';
import { AiFillGift} from 'react-icons/ai';
import { FaMapMarkerAlt} from 'react-icons/fa';


import React from 'react'
import "./header.css"

const header = () => {
  return (
    <div className='sale'>
       <p className='sale1'>Eco-Store's Pink Friday Sale is on!!!</p>

        <div className='Events'><AiFillGift/>Store & Events |</div>
        <div className='Card'><FaMapMarkerAlt/>Gift Card |</div>
        <div className='Help'><IoIosHelpCircle/>Help </div>
    </div>
  )
}

export default header