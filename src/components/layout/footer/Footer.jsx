import { BsInstagram } from 'react-icons/bs';
import {FaFacebookSquare} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';
import {GiPaintBrush} from 'react-icons/gi';
import "./footer.css"


export const Footer = () => {
  return (
    <div className='contFooter'>
        <div>
            <GiPaintBrush className='logos' />
        </div>
        <h3>Rodrigo Mansilla</h3>
        <div className='contRedes'>
            <BsInstagram className='logos' />
            <FaFacebookSquare className='logos' />
            <FiMail className='logos' />
        </div>
        
    </div>
  )
}
