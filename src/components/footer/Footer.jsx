import React from 'react'
import './footer.css'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Pratiksha Sharma</a>
      <ul className='permalink'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.instagram.com/ki_farq_panda" target='_blank'><FaInstagram/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Pratiksha Sharma. All rights reserved.</small>
      </div>
    </footer>
  )
};

export default Footer