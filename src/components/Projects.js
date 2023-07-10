import React from 'react';
import '../scss/projects.scss';
import { AiFillEdit } from 'react-icons/ai';
import { useState } from 'react';
import { useEffect } from 'react';
import data from '../assets/projects.json'

function Projects() {
  const [ fade, setFade ] = useState('');

  useEffect(() => {
    setFade('end')
  }, [])

  return (
    <div className={`projects start ${fade}`}>
      <div className='title'>
        <AiFillEdit />
        <h1>PROJECTS</h1>
      </div>
      <div className='box-wrap'>
        {
          [...data].reverse().map((item, index) => {
            return (
              <div className='projects-box' key={index}>
                <img src={process.env.PUBLIC_URL+ `/images/${item.image[0]}.gif`} alt={item.name} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects