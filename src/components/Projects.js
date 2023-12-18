import React from 'react';
import '../scss/projects.scss';
import { AiFillProject, AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from "react-icons/cg";
import { useState } from 'react';
import { useEffect } from 'react';
import data from '../assets/projects.json';
import Skillmap from './Skillmap';
import CommentMap from './CommentMap';
import ImgSlide from './ImgSlide';
import WorkMap from './WorkMap';

function Projects() {
  const [ fade, setFade ] = useState('');

  useEffect(() => {
    setFade('end')
  }, [])

  return (
    <div className='content'>
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
                    <div className='img-box'>
                      <ImgSlide image={item.image} />
                    </div>
                    
                    <div className='txt-box'>
                      <p className='sub-title'>작업 기간</p>
                      <p className='sub-content'>{item.period}</p>
                      <p className='sub-title'>참여 파트</p>
                      <p className='sub-content'>{item.part}</p>
                      <p className='sub-title'>작업 내용</p>
                      <WorkMap work={item.work} />
                      {
                        item.comment[0] != '' ?
                        <>
                          <p className='sub-title'>코멘트</p>
                          <CommentMap comment={item.comment} />
                        </>
                        :
                        null
                      }
                      
                      <div className='btn-box'>
                        {
                          item.url != "" ? <div className='btn btn-homepage' onClick={() => window.open(`${item.url}`)}><p><CgWebsite />홈페이지</p></div>
                          : null
                        }
                        {
                          item.github != "" ? <div className='btn btn-git' onClick={() => window.open(`${item.github}`)}><p><AiFillGithub />깃허브</p></div>
                          : null
                        }
                      </div>
                      <div className='skill-box'>
                        <Skillmap skill={item.skill} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
          
        </div>
      </div>
    </div>
  )
}

export default Projects