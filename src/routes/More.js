import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import plusList from '../data/plusList.json';
import profiles from '../data/memberList.json';
import PlusFriends from '../components/PlusFriends';
import '../styles/More.scss';


function More() {
  const myProfile = profiles[0]
  return (
    <>
      <Header tab_name = 'More' right_btn = 'fas fa-cog' />
      <main id='more'>
        <section className='user_info'>
          <h2 className='blind'>사용자 정보</h2>
          <span className='profile_img' style={{backgroundImage : 'url(' + myProfile.profileImg + ')'}}></span>
          <span className='profile_info'>
              <span className='profile_name'>{myProfile.name}</span>
              <span className='profile_email'>{myProfile.email}</span>
          </span>
          <span className='chat_img'><a href="#"><i className='far fa-comment'></i></a></span>
        </section>
        <section className='user_menu'>
          <h2 className='blind'>사용자 메뉴</h2>
          <ul>
              <li><a href="#"><i className='far fa-smile'></i>Emoticons</a></li>
              <li><a href="#"><i className='fas fa-paint-brush'></i>Themes</a></li>
              <li><a href="#"><i className='far fa-hand-peace'></i>Plus Friends</a></li>
              <li><a href="#"><i className='far fa-user-circle'></i>Account</a></li>
          </ul>
        </section>
        <section className='plus_friends'>
          <header>
              <h2>Plus Friends</h2>
              <span><i class="fas fa-info-circle"></i>Learn More</span>
          </header>
          <ul className='plus_list'>
              {plusList.map(plus =>(
                <PlusFriends icon={plus.icon} text={plus.text} />
              ))}
          </ul>
        </section>
        <section className='more_app'>
          <h2 className='blind'>앱 더보기</h2>
          <ul>
              <li><a href="#"><span className='app_icon'></span>kakao story</a></li>
              <li><a href="#"><span className='app_icon'></span>Path</a></li>
              <li><a href="#"><span className='app_icon'></span>kakao friends</a></li>
          </ul>
        </section>
      </main>
      <Nav/>
    </>
  )
}

export default More