import React from 'react';
import '../scss/projects.scss';
import { AiFillProject } from 'react-icons/ai';
import { useState } from 'react';
import { useEffect } from 'react';
import data from '../assets/projects.json';
import Skillmap from './Skillmap';

function Projects() {
  const [ fade, setFade ] = useState('');

  useEffect(() => {
    setFade('end')
  }, [])

  return (
    <div className={`projects start ${fade}`}>
      <div className='title'>
        <AiFillProject />
        <h1>PROJECTS</h1>
      </div>
      <div className='box-wrap'>
        {
          [...data].reverse().map((item, index) => {
            return (
              <div className='projects-box' key={index}>
                <h5>{item.name}</h5>
                <div className='content-box'>
                  <img src={process.env.PUBLIC_URL+ `/images/${item.image[0]}.gif`} alt={item.name} />
                  <div>
                    <p className='sub-title'>- 작업 기간</p>
                    <p className='sub-content'>{item.period}</p>
                    <p className='sub-title'>- 작업 내용</p>
                    <p className='sub-content'>{item.comment}</p>
                  </div>
                </div>
                <div className='skill-box'>
                  <Skillmap skill={item.skill} />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects