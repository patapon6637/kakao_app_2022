import React from 'react';
import { Link } from 'react-router-dom';

function ChatList({id,name,comment,img}) {
  return (
    <li>
        <Link to={'/Chatting'}
            state = {{id, name, comment, img}}>
            <span className='chats_img'
            style={{backgroundImage : 'url('+img+')'}}>
            </span>
            <span className='chats_cont'>
              <span className='chats_name'>{name}</span>
              <span className='chats_latest'>{comment}</span>
            </span>
            <span className='chats_time'><span>17</span>:<span>33</span></span>
        </Link>
    </li>
  )
}

export default ChatList