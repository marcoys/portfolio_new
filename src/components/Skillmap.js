import React from 'react'

function Skillmap(props) {
  return (
    <>
      {
        props.skill.map((item) => {
          return (
            <img src={process.env.PUBLIC_URL + `/images/${item}.png`} alt="" />
          )
        })
      }
    </>
  )
}

export default Skillmap