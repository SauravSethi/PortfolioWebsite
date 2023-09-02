import React from 'react'

import './Service.css'

import {BsCheck} from 'react-icons/bs'

const Service = () => {
  return (
    <section id='services'>
     <h5>What I Offer</h5>
     <h2>Services</h2>

     <div className="container service__container">
      <article className='service'>
        <div className="service__head">
              <h3>UI/UX Design</h3>
        </div>

        <ul className="service__list">
           <li>
            <BsCheck  className='service list__icon'/>
            <p>User Interface (UI) Design</p>
           </li>
           <li>
            <BsCheck  className='service list__icon'/>
            <p>User Experience (UX) Design</p>
           </li>
           <li>
            <BsCheck  className='service list__icon'/>
            <p>Responsive and Mobile Design</p>
           </li>
           <li>
            <BsCheck  className='service list__icon'/>
            <p>Information Architecture</p>
           </li>
           <li>
            <BsCheck  className='service list__icon'/>
            <p>User Testing and Feedback</p>
           </li>
        </ul>

      </article>

     
      <article className='service'>
        <div className="service__head">
              <h3>Web Development</h3>
        </div>

        <ul className="service__list">
           <li>
            <BsCheck  className='service list__icon'/>
            <p>Full-Stack Development</p>
           </li>
           <li>
            <BsCheck  className='service list__icon'/>
            <p>Custom Web Application Development</p>
           </li>
           <li>
            <BsCheck  className='service list__icon'/>
            <p>E-Commerce Website Development</p>
           </li>
           <li>
            <BsCheck  className='service list__icon'/>
            <p>API Integration</p>
           </li>
           <li>
            <BsCheck  className='service list__icon'/>
            <p>Database Development</p>
           </li>
           <li>
            <BsCheck  className='service list__icon'/>
            <p>Web Hosting and Deployment</p>
           </li>
           <li>
            <BsCheck  className='service list__icon'/>
            <p>Version Control and Git Workflow</p>
           </li>
        </ul>

      </article>
   

    <article className='service'>
        <div className="service__head">
              <h3>Content Creation</h3>
        </div>

        <ul className="service__list">
           <li>
            <BsCheck  className='service list__icon'/>
            <p>Content Updates</p>
           </li>
           <li>
            <BsCheck  className='service list__icon'/>
            <p>SEO Content</p>
           </li>
           
        </ul>

      </article>

     
     </div>

    </section>
  );
}

export default Service