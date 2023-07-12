import React from 'react'

function Skillmap(props) {
  return (
    <>
      {
        props.skill.map((item, index) => {
          return (
            <img src={process.env.PUBLIC_URL + `/images/${item}.png`} alt={item} key={index} />
          )
        })
      }
    </>
  )
}

export default Skillmap