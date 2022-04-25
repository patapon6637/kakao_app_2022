import React from 'react';
import propTypes from 'prop-types';
import '../styles/Header.scss';

function Header({tab_name, title_icon, friend_num, left_btn, right_btn}) {
    if(tab_name === undefined) {tab_name = ''}
    if(title_icon === undefined) {title_icon = ''}
    if(friend_num === undefined) {friend_num = ''}
    if(left_btn === undefined) {left_btn = ''}
    if(right_btn === undefined) {right_btn = ''}
    return (
        <header className={tab_name}>
            <div className='status_bar'>
                <div className='left_item'><i class="fas fa-plane"></i><i class="fas fa-wifi"></i></div>
                <div className='center_item'><span>17</span>:<span>33</span></div>
                <div className='right_item'><i class="far fa-moon"></i><i class="fab fa-bluetooth-b"></i><span><span>100</span>%</span><i class="fas fa-battery-full"></i></div>
            </div>
            <div className='title_bar'>
                <h1>{tab_name}<i className={title_icon}></i><span>{friend_num}</span></h1>
                <div className='left_item'>
                    <a href="#">{(left_btn.indexOf("fa") === -1) ? (left_btn) : (<i className={left_btn}></i>)}
                    </a>
                </div>
                <div className='right_item'>
                    <a href="#">{(right_btn.indexOf("fa") === -1) ? (right_btn) : (<i className={right_btn}></i>)}
                    </a>
                </div>
            </div>

        </header>
    )
}

Header.propTypes = {
    tab_name : propTypes.string,
    title_icon : propTypes.string,
    friend_num : propTypes.number,
    left_btn : propTypes.string,
    right_btn : propTypes.string
  };


export default Header