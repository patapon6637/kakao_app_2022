import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import '../styles/Find.scss';

function Find() {
  return (
    <>
      <Header tab_name = 'Find' left_btn = 'Edit' />
      <main id='find'>
        <ul className='find_method'>
          <li><a href="#"><i className='fas fa-address-book'></i>Find</a></li>
          <li><a href="#"><i className='fas fa-qrcode'></i>QR Code</a></li>
          <li><a href="#"><i className='fas fa-mobile-alt'></i>Shake</a></li>
          <li><a href="#"><i className='fas fa-envelope'></i>Invite via SNS</a></li>
        </ul>
        <section className='recommend_section'>
          <header><h2>Recommended Friends</h2></header>
          <ul>
              <li>You Have no recommended friends</li>
          </ul>
        </section>
      </main>
      <Nav/>
    </>
  )
}

export default Find