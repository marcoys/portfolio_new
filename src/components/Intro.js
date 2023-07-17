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
        <p>열정적인 학습자로서 지속적인 성장과 새로운 기술 습득에 주도적으로 도전합니다.</p>
        <p>새로운 기술과 트렌드에 능숙하게 대응하여 현대적이고 효율적인 웹 솔루션을 제공할 수 있는 개발자가 목표입니다.</p>
      </div>
      <div className='intro_info'>
        tpzjsem
      </div>
      <video autoPlay muted loop className={'start ' + fade}>
        <source src={bg_url} type="video/mp4" />
      </video>
      <p></p>
    </div>
  )
}

export default Intro