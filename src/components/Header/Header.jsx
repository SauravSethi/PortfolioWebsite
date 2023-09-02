import React from 'react'

import './Header.css'

import CTA from '../CTA/CTA'

import ME from '../../Assets/Me.png'

import HeaderSocial from './HeaderSocial'



const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Saurav Sethi</h1>
        <div className="text-light">Fullstack Developer</div>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" className='me-image' />
        </div>

       
        <a href="#Contact"className='scroll__down' >Scroll Down</a>

      </div>
    </header>
  );
}

export default Header