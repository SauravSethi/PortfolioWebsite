import React from 'react'

import {BsFacebook} from 'react-icons/bs'

import {BsInstagram} from 'react-icons/bs'

import {FaTwitter} from 'react-icons/fa'

import './Footer.css'

const Footer = () => {
  return (
    <footer >
      <a href="#" className='footer__logo'>Quick link</a>
      <ul className="permalink">
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"  ><BsFacebook /></a>
        <a href="https://instagram.com"><BsInstagram /></a>
        <a href="https://twitter.com"><FaTwitter /></a>
      </div>
      <h3>Made with </h3>
    </footer>
  )
}

export default Footer