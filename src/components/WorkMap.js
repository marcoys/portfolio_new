import React from 'react'

function WorkMap(props) {
  return (
    <>
      {
        props.work.map((item, index) => {
          return (
            <p className='sub-content' key={index}>{item}</p>
          )
        })
      }
    </>
  )
}

export default WorkMap