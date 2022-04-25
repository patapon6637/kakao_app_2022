import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import MemberList from '../components/MemberList';
import profiles from '../data/memberList.json';
import '../styles/Friends.scss';

function Friends() {
  const myProfile = profiles[0];
  return (
    <>
      <Header tab_name = 'Friends' friend_num = '1' left_btn = 'Manage' right_btn = 'fas fa-cog' />
      <main id='friends'>
        <form className='search_box'>
          <fieldset className='search_inner'>
              <legend className='blind'>검색창</legend>
              <i className='fas fa-search'></i>
              <input type="search" name="search" id="search" placeholder="Find friends, chats, Plus Friends" />
          </fieldset>
        </form>
        <section className='main_section'>
          <header><h2>My Profile</h2></header>
          <ul>
              <MemberList 
                id = {myProfile.id}
                name = {myProfile.name}
                email = {myProfile.email}
                text = {myProfile.profilMsg}
                img = {myProfile.profileImg}
                bg = {myProfile.backgroundImg}
                />
          </ul>
        </section>  
        <section className='main_section'>
          <header><h2>Friends</h2></header>
          <ul>
              {profiles.map(profile => {
                if(profile.id != 0) {
                  return(
                    <MemberList
                      id = {profile.id}
                      name = {profile.name}
                      email = {profile.email}
                      text = {profile.profilMsg}
                      img = {profile.profileImg}
                      bg = {profile.backgroundImg}
                    />
                  )
                }
              })}
          </ul> 
        </section>
      </main>
      <Nav />
    </>
  )
}




export default Friends