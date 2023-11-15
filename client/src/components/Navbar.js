import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='px-52 bg-[#E9EBE7] font-display flex justify-between items-center py-3 border' style={{ borderBottom: 'none' }}>
      <div>
        <NavLink to="/">
          <img className='h-28' src={logo} alt="" />
        </NavLink>
      </div>
      <div>
        <ul className='flex justify-center items-center space-x-10 text-sm font-semibold text-[#385529] '>
          <li>
            <NavLink to="#">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="#">Events</NavLink>
          </li>
          <li>
            <NavLink to="#">Members</NavLink>
          </li>
          <li>
            <NavLink to="#">Alumni awards</NavLink>
          </li>
        </ul>
      </div>
      <div className='flex justify-center space-x-5 font-semibold'>
        <NavLink to="/login">
          <button className='border  bg-dark-green py-[0.5em] px-6 rounded-lg text-white font-thin' style={{ color: 'white' }}>
            Login
          </button>
        </NavLink>
        <NavLink to="/signup">
          <button className='border  bg-dark-green py-[0.5em] px-6 rounded-lg text-white font-thin' style={{ color: 'white' }}>
            Signup
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
