import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

import { RiVideoAddFill } from 'react-icons/ri'
import { MdApps } from 'react-icons/md'
import {BsFillBellFill} from 'react-icons/bs'

import './Header.css' 
import SearchBar from './SearchBar'

function Header() {
  return (
    <header className="header__container">
    {/* Header Start */}
      <div className="header__start">
        <GiHamburgerMenu className="header__start__hamburger"/>
        <img
          className="header__start__image"
          alt=""
          src="https://www.youtube.com/yts/img/marketing/browsers/yt_logo_rgb_light-vflc4oMnY.png" />
        <span className="header__start__nation">KR</span>
      </div>
      {/* Header Middle */}
      <SearchBar />
      {/* Header Last */}
      <div className="header__last">
        <RiVideoAddFill className="header__last__components" />
        <MdApps className="header__last__components" />
        <BsFillBellFill className="header__last__components" />
      </div>
    </header>
  )
}

export default Header