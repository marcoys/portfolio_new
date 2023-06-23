import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../scss/header.scss';

function Header() {
  let navigate = useNavigate();

  return (
    <header>
      <h1 onClick={() => {navigate('/')}}>YS</h1>
      <ul>
        <li onClick={() => {navigate('/')}}>Home</li>
        <li onClick={() => {navigate('/skills')}}>Skills</li>
        <li onClick={() => {navigate('/projects')}}>Projects</li>
      </ul>
    </header>
  )
}

export default Header