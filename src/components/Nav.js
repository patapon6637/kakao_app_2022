import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.scss';

function Nav() {
  const [activeNav, setActiveNav] = useState(1);
  return (
    <nav className="tab_bar">
        <ul>
            <li>
                <Link to="/" className='tab_list' onClick={() => setActiveNav(1)}>
                    <span className={activeNav === 1 ? "tab_list active" : "tab_list"}><i className='fas fa-user'></i>Friends</span>
                </Link>
            </li>
            <li>
                <Link to="/chats" className='tab_list' onClick={() => setActiveNav(2)}>
                    <span className={activeNav === 2 ? "tab_list active" : "tab_list"}><i className='fas fa-comment'></i>Chats</span>
                </Link>
            </li>
            <li>
                <Link to="/find" className='tab_list' onClick={() => setActiveNav(3)}>
                    <span className={activeNav === 3 ? "tab_list active" : "tab_list"}><i className='fas fa-search'></i>Find</span>
                </Link>
            </li>
            <li>
                <Link to="/more" className='tab_list' onClick={() => setActiveNav(4)}>
                    <span className={activeNav === 4 ? "tab_list active" : "tab_list"}><i className='fas fa-ellipsis-h'></i>More</span>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav