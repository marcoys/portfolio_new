import React, { useEffect, useState } from 'react';
import '../scss/skills.scss';
import { AiFillEdit } from 'react-icons/ai';
import data from '../assets/skills.json';

function Skills() {
  const [ fade, setFade ] = useState('')
  const [ modal, setModal ] = useState(false);
  const [ modalFade, setModalFade ] = useState('');
  const [ clicked, setClicked ] = useState([]);
  
  useEffect(() => {
    setFade('end')
  })

  useEffect(() => {
    if(modal) {
      setModalFade('fade_on')
    } else {
      setTimeout(() => setModalFade('fade_off'))
    }
  }, [modal, clicked])

  function openModal(e) {
    setModal(true)
    console.log(e.target.id)
    setClicked(data[e.target.id])
    console.log(clicked)
  }

  function closeModal() {
    setModal(false)
  }

  return (
    <div className={`skills start ${fade}`}>
      {
        modal ? <div onClick={() => {closeModal()}} className={`bg-black ${modalFade}`}></div> : null
      }
      
      <div className='title'>
        <AiFillEdit />
        <h1>SKILLS</h1>
      </div>

      <div className='skills-icon-wrap'>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <img src={process.env.PUBLIC_URL + `/images/${item.icon}.png`} alt={item.title} className='off' onClick={(e) => {openModal(e)}} id={item.id} />
            </div>
          )
        })}

        {
          modal ?
            <div className={`modal ${modalFade}`}  onClick={() => {closeModal()}}>
              <img src={process.env.PUBLIC_URL +  `/images/${clicked.icon}.png`} alt={clicked.title} className='dummy_icon'/>
              <ul>
                {
                  clicked.detail.map((item) => {
                    return (
                      <li>
                        {item}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          :
            null
          }
      </div>
    </div>
  )
}

export default Skills


// 클릭한 이미지 아이디가 0
// data의 