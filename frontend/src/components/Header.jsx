import React from 'react'
import Link from 'react-router-dom'
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import logo from '../assets/logo.svg'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
        <div className="header-container">
            <div className='logo_wrapper'>
              <img className='logo' src={logo} alt="airbnb logo" />
            </div>
            <div className="nav_options">
              <span className='nav_option'>Places to stay</span>
              <span className='nav_option'>Experience</span>
              <span className='nav_option'>Online Experiences</span>
            </div>
            <div className="menu_options">
              <span className='menu_option'>Become a Host</span>
              <span className='menu_option'><LanguageIcon sx={{ fontSize: 15 }}/></span>
              <span className='menu_option menu_button'>
                <span><MenuIcon sx={{ fontSize: 25 }}/></span>
                <span><AccountCircleTwoToneIcon sx={{ fontSize: 35 }}/></span>
              </span>
            </div>
        </div>
    </header>
  )
}

export default Header
