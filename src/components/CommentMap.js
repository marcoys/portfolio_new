import React from 'react'

function CommentMap(props) {
  return (
    <>
      {
        props.comment.map((item, index) => {
          return (
            <p className='sub-content' key={index}>{item}</p>
          )
        })
      }
    </>
  )
}

export default CommentMap