import React from 'react';
import logo from '../hacker_news-logo.png';

export default function Navbar() {
  return (
    <nav className='navbar bg-dark'>
      <div className='container-fluid'>
        <a href='/' className='navbar-brand p-0'>
          {/* <i className='fas fa-home'></i> */}
          <img
            src={logo}
            alt='logo'
            style={{ width: '40px', height: '40px' }}
          />
        </a>
        <a href='/' className='navbar-brand'>
          <span className='nav-title text-white'>HACKER NEWS</span>
        </a>
      </div>
    </nav>
  );
}
