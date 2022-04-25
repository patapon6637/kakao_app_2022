import React from 'react';
import { Link } from 'react-router-dom';

function MemberList({id, name, email, img, text, bg}) {
  return (
    <ul>
        <li>
            <Link to={'/Profile'}
              state = {{id, name, email, img, bg}}>
              <span className='profile_img'
              style={{backgroundImage : 'url('+img+')'}}>
              </span>
              <span className='profile_name'>{name}</span>
              <span className='profile_messages'>{text}</span>
            </Link>
        </li>
    </ul>
  )
}

export default MemberList