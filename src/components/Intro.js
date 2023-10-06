import React from 'react';
import '../scss/intro.scss';
import bg_url from '../assets/bg_video.mp4'
import { useState } from 'react';
import { useEffect } from 'react';
import { PiArrowFatLineDownLight } from "react-icons/pi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from 'react';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function Intro() {
  const [ fade, setFade ] = useState('');
  const introRef = useRef();
  const thumbRef = useRef(null);
  const txt1Ref = useRef(null);
  const txt2Ref = useRef(null);

  useEffect(() => {
    const ani1 = thumbRef.current;
    const ani2 = txt1Ref.current;
    const ani3 = txt2Ref.current;
    const top = introRef.current;
    const tl = gsap.timeline();

    tl.fromTo(ani1, {y: -200, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 1})
    .fromTo(ani2, {x: 200, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 1, stagger: 2})
    .fromTo(ani3, {x: -200, autoAlpha: 0}, {x: 0, autoAlpha: 1, stagger: 1})
    
    // 프로젝트 바로가기 버튼 애니메이션
    gsap.to('.link-box svg', {
      x: -7,
      yoyo: true,
      duration: 1,
      ease: "Power1.easeInOut",
      repeat: -1,
      duration: 0.5
    }
    );

  }, [])

  useEffect(() => {
    setFade('end')
  }, [])

  let navigate = useNavigate();

  return (
    <div className='intro' ref={introRef}>
      <div className='intro_content'>
        <img src={process.env.PUBLIC_URL + '/images/mm2.png'} alt="" ref={thumbRef} />
        <h1 ref={txt1Ref}>
          웹 퍼블리셔, 프론트엔드 개발자<br />
          <strong>이유상</strong>의 포트폴리오입니다.
        </h1>
        <div ref={txt2Ref}>
          <p>열정적인 학습자로서 지속적인 성장과 새로운 기술 습득에 주도적으로 도전합니다.</p>
          <p>새로운 기술과 트렌드에 능숙하게 대응하여 현대적이고 효율적인 웹 솔루션을 제공할 수 있는 개발자가 목표입니다.</p>
        </div>
        <div className='icon-scroll-down'><PiArrowFatLineDownLight /></div>
      </div>
      <div className='intro_info content'>
        <h4>이유상</h4>
        <div className='info-wrap'>
          <div className='info-indiv'>
            <p>1989.12.12</p>
            <p>성남시 분당구</p>
            <p>ysmarco12@gmail.com</p>
            <p>https://github.com/marcoys</p>
          </div>
          <div className='info-etc'>
            
            <div className='work'>
              <h5>Work</h5>
              <div>
                <strong>넥스미디어</strong>
                <p>2023.09.11 ~ [ 근무중 ]</p>
                <p>웹 퍼블리셔 근무 (주임)</p>
                <ul>
                  <li>
                    <p>부동산 분양 사이트 퍼블리싱</p>
                  </li>
                  <li>
                    <p>기업 홈페이지 제작/유지보수</p>
                  </li>
                </ul>
              </div>
              <div>
                <strong>누리웹</strong>
                <p>2020.01.02 ~ 2022.05.31</p>
                <p>웹 퍼블리셔 근무 (대리)</p>
                <ul>
                  <li>
                    <p>500여개 고객사 홈페이지 유지보수</p>
                  </li>
                  <li>
                    <p>기업, 병원, 업체 등의 홈페이지 제작, 리뉴얼 프로젝트 진행</p>
                  </li>
                </ul>
                <div className='link-box'>
                  <IoArrowForwardCircleOutline />
                  <p onClick={() => navigate('/portfolio_new/projects')}>프로젝트 바로가기</p>
                </div>
              </div>
            </div>
            
            <div className='edu'>
              <h5>Education</h5>
              <div>
                <strong>이젠아카데미컴퓨터학원</strong>
                <p>2018.06 ~ 2018.11</p>
                <p>스마트미디어응용 디자인콘텐츠 개발과정 수료</p>
                <ul>
                  <li>
                    <p>정보설계 및 Mock-Up 제작</p>
                  </li>
                  <li>
                    <p>UI 스타일가이드 제작 및 UI 설계</p>
                  </li>
                  <li>
                    <p>인터렉션 및 화면설계</p>
                  </li>
                  <li>
                    <p>안드로이드 앱 개발 응용</p>
                  </li>
                  <li>
                    <p>UXUI 웹/앱 디자인 실무 프로젝트</p>
                  </li>
                  <li>
                    <p>개인 프로젝트: 성남아트센터 웹사이트 리뉴얼</p>
                  </li>
                  <li>
                    <p>개인 프로젝트: 치매예방앱 'DR. Dementia' 제작</p>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
      <video autoPlay muted loop className={'start ' + fade}>
        <source src={bg_url} type="video/mp4" />
      </video>
      <p></p>
    </div>
  )
}

export default Intro