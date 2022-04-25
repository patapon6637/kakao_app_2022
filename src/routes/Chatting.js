import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Chatting.scss';

function Chatting() {
    const location = useLocation();
    const {name, img} = location.state;
  return (
    <>
      <header className='header chatting'>
        <div className='status_bar'>
          <div className='left_item'><i className='fas fa-plane'></i><i className='fas fa-wifi'></i></div>
          <div className='center_item'><span>17</span>:<span>33</span></div>
          <div className='right_item'><i className='far fa-moon'></i><i className='fab fa bluetooth-b'></i><span><span>100</span>%</span><i className='fas fa-battery-full'></i></div>
        </div>
        <div className='title-bar'>
            <h1>{name}</h1>
            <div className='left_item'>
              <Link to='/chats'>
                <i className='fas fa-angle-left'></i>
              </Link>
            </div>
            <div className='right_item'><i className='fas fa-search'></i><i className='fas fa-bars'></i></div>
        </div>
      </header>
      <main id='mainChat'>
        <span className='date_info'>Monday, April 18, 2022</span>
        <div className='chat_box my'>
          <span className='chat'>Hello!</span>
          <span className='chat'>Hello! This is a test message.</span>
          <span className='chat'>This is a test message.</span>
          <span className='chat_time'><span>16</span>:<span>30</span></span>
        </div>
        <div className='chat_box other'>
          <div className='other_info'>
            <Link to=''>
              <span className='profile_img'><img src={img} alt='profile image' /></span>
            </Link>
          </div>
          <span className='profile_name'>{name}</span>
          <span className='chat'>And this is an answer</span>
          <span className='chat'>And this is an answer And this is an answer</span>
          <span className='chat'>And this is an answer</span>
          <span className='chat_time'><span>17</span>:<span>33</span></span>
        </div>
      </main>
      <footer>
        <span className='plus_btn'><a href="#"><i className='fas fa-plus'></i></a></span>
        <form action="/" method="post">
            <fieldset className='text_box'>
                <legend className='blind'>채팅 입력창</legend>
                <label for="chatting" className='blind'>채팅 입력</label>
                <input type="text" id="chatting" className='text_field' />
                <span className='emoticon_btn'><a href="#"><i className='far fa-smile'></i></a></span>
                <span className='voice_btn'><a href="#"><i className='fas fa-microphone'></i></a></span>
            </fieldset>
        </form>
      </footer>
    </>
  )
}

export default Chatting