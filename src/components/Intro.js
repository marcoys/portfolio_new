import React from 'react';
import '../scss/intro.scss';
import bg_url from '../assets/bg_video.mp4'
import { useState } from 'react';
import { useEffect } from 'react';

function Intro() {
  const [ fade, setFade ] = useState('');

  useEffect(() => {
    setFade('end')
  }, [])

  return (
    <div className='intro'>
      <div className='intro_content'>
        <img src={process.env.PUBLIC_URL + '/images/mm2.png'} alt="" />
        <h1>
          웹 퍼블리셔, 프론트엔드 개발자<br />
          <strong>이유상</strong>의 포트폴리오입니다.
        </h1>
        <p></p>
      </div>
      <video autoPlay muted loop className={'start ' + fade}>
        <source src={bg_url} type="video/mp4" />
      </video>
      <p></p>
    </div>
  )
}

export default Intro