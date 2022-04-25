import React from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import ChatList from '../components/ChatList';
import profile from '../data/memberList.json';
import '../styles/Chats.scss';

function Chats() {
  return (
    <>
      <Header tab_name = 'Chats' left_btn = 'Edit' title_icon="fas fa-caret-down"  />
      <main id='Chats'>
        <form className='search_box'>
          <fieldset className='search_inner'>
              <legend className='blind'>검색창</legend>
              <i className='fas fa-search'></i>
              <input type="search" name="search" id="search" placeholder="Find friends, chats, Plus Friends" />
          </fieldset>
        </form>
        <section className='main_section'>
          <ul>
              {profile.map(profile => 
              {if(profile.id !=0){
                return(
                  <ChatList
                    id={profile.id}
                    name={profile.name}
                    comment={profile.lastMsg}
                    img={profile.profileImg}
                    />
                  )
                }}
              )}
          </ul>
        </section>
        <div className='chat_btn'>
          <a href="#">
              <i class="fas fa-comment"></i>
          </a>
        </div>
      </main>
      <Nav />
    </>
  )
}

export default Chats