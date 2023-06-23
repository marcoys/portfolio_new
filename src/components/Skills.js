import React from 'react';
import '../scss/skills.scss';

function Skills() {
  return (
    <div className='skills'>
      <ul>
        <li>
          <div>
            <img src={process.env.PUBLIC_URL + '/images/html.png'} alt="html" />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Skills