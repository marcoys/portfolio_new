import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../scss/header.scss';
import { AiFillHome, AiFillProject, AiFillEdit } from 'react-icons/ai';

function Header() {
  const [ headerHover, setHeaderHover ] = useState(false);
  let navigate = useNavigate();

  const handleMouseOn = () => {
    setHeaderHover(true);
  }
  const handleMouseOff = () => {
    setHeaderHover(false)
  }

  return (
    <header className={headerHover ? 'on' : ''}
      onMouseOver={handleMouseOn}
      onMouseOut={handleMouseOff}
    >
      <h1 onClick={() => {navigate('/')}}>YS</h1>
      <ul>
        <li onClick={() => {navigate('/')}}>
          <AiFillHome /><h5 className={headerHover ? 'on' : ''}>HOME</h5>
        </li>
        <li onClick={() => {navigate('/skills')}}>
          <AiFillEdit /><h5 className={headerHover ? 'on' : ''}>SKILLS</h5>
        </li>
        <li onClick={() => {navigate('/projects')}}>
          <AiFillProject /><h5 className={headerHover ? 'on' : ''}>PROJECTS</h5>
        </li>
      </ul>
    </header>
  )
}

export default Header