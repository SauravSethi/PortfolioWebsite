import React from 'react'

import {SiLinkedin} from 'react-icons/si'

import {BsGithub} from 'react-icons/bs'

import {BsInstagram} from 'react-icons/bs'


const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="http://linkedin.com"target='_blank'><SiLinkedin /></a>
        <a href="http://github.com"target='_blank'><BsGithub /></a>
        <a href="http://instagram.com"target='_blank'><BsInstagram /></a>

    </div>
  )
}

export default HeaderSocial