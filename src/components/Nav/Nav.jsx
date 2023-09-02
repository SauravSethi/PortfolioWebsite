import React from 'react'

import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {BsBook} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {BiPhoneCall} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
   <nav>
    <a href="#" onClick={() =>setActiveNav('#')}className={activeNav==='#' ? 'active' : ''}><AiOutlineHome /></a>
    <a href="#About" onClick={() =>setActiveNav('#About')}className={activeNav==='About' ? 'active' : ''}><CgProfile /></a>
    <a href="#Experience"onClick={() =>setActiveNav('#Experience')}className={activeNav==='Experience' ? 'active' : ''}><BsBook /></a>
    <a href="#Service"onClick={() =>setActiveNav('#services')}className={activeNav==='Service' ? 'active' : ''}><RiServiceLine /></a>
    <a href="#Contact"onClick={() =>setActiveNav('#Contact')}className={activeNav==='Contact' ? 'active' : ''}><BiPhoneCall /></a>
   </nav>
  )
}

export default Nav