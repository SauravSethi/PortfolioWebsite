import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import {SiExpress} from 'react-icons/si';
import {BiLogoJava} from 'react-icons/bi';
import {TbSql} from 'react-icons/tb';
import './MovingSkills.css';

const skills = [
  { icon: <FaHtml5 className='html-icon' />, name: 'HTML' },
  { icon: <FaCss3 className='css-icon' />, name: 'CSS' },
  { icon: <FaJs className='js-icon' />, name: 'JavaScript' },
  { icon: <FaReact className='react-icon' />, name: 'React' },
  { icon: <FaNodeJs className='node-icon' />, name: 'Node.js' },
  { icon: <FaDatabase className='mongo-icon' />, name: 'MongoDB' },
  { icon: <SiExpress className='express-icon' />, name: 'Express.js' },
  { icon: <BiLogoJava className='java-icon' />, name: 'Java' },
  { icon: <TbSql className='sql-icon' />, name: 'SQL' },
  
  
  // Add more skills
];

const MovingSkills = () => {
  return (
    <div  className='moving-skills-container'>
      {skills.map((skill, index) => (
        <div key={index} className='moving-skill'>

          <div className='icon'>{skill.icon}</div>
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

export default MovingSkills;


