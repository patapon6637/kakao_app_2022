import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Profile.scss';

function Profile() {
  const location = useLocation();
  const {name, email, img, bg} = location.state;
  return (
    <>
      <header className='header_pro'>
        <div className='status_bar'>
            <div className='left_item'><i className='fas fa-plane'></i><i className='fas fa-wifi'></i></div>
            <div className='center_item'><span>17</span>:<span>33</span></div>
            <div className='right_item'><i className='far fa-moon'></i><i className='fab fa bluetooth-b'></i><span><span>100</span>%</span><i className='fas fa-battery-full'></i></div>
        </div>
        <div className='title-bar'>
            <h1 className='blind'>Profile</h1>
            <div class="left_item">
              <Link to='/'>
                <i className='fas fa-times'></i>
              </Link>
            </div>
            <div class="right_item"><a href="#"><i class="fas fa-user"></i></a></div>
        </div>
      </header>
      <main id='mainPro'>
        <div className='background' style={{ backgroundImage: 'url("'+ bg + '")'}}></div>
        <section className='profile'>
            <h2 className='blind'>My profile info</h2>
            <div className='profile_img'><img src={img} alt='profile image' /></div>
            <div className='profile_cont'>
                <span className='profile_name'>{name}</span>
                <input type="mail" className='profile_email' placeholder={email} />
                <ul className='profile_menu'>
                    <li><a href="#"><span className='icon'><i class="fas fa-comment"></i></span>My Chatroom</a></li>
                    <li><a href="#"><span className='icon'><i class="fas fa-pencil-alt"></i></span>Edit Profile</a></li>
                </ul>
            </div>
        </section>
      </main>
    </>
  )
}

export default Profile