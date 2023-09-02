import React from 'react'

import Abouts from '../../Assets/About.png'


import './About.css'

import {FiAward} from 'react-icons/fi'

import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='About'>

    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__image">
      <img src={Abouts} alt="About Me" />
        </div>
      </div>

      <div className="about__content">
       <div className="about__cards">
        <article className='about__card'>
         <FiAward className='about__icon' />
          <h5>Experience</h5>
          <small>2+ Years Working</small>
        </article>

        <article className='about__card'>
         < AiFillFolderOpen className='about__icon' />
          <h5>Projects</h5>
          <small>5+ Completed Projects</small>
        </article>
        
       </div>
       <p>
       I am an accomplished Full Stack Web Developer, proficient in crafting, creating, and sustaining innovative projects. With a dynamic approach to continuous learning, I am adept at embracing change and honing new skills. My work reflects a commitment to producing refined, streamlined, and effective code. My strength lies in fostering collaboration, making informed choices, and mastering the realm of Data Structures & Algorithms. Eagerly pursuing diverse programming languages, frameworks, and principles to further enrich my skill repertoire.
       </p>
       <a href ='#Contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  );
}

export default About