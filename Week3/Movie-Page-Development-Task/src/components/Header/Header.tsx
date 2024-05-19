import React from 'react'
import {NavLink } from "react-router-dom"
import headerLogo from '../../assets/icons/Logo.svg'
import headerSearch from '../../assets/icons/Vector.svg'
import headerNotification from '../../assets/icons/Icon.svg'

const Header = () => {
  return (
    <>
      <header>
        <section>
          <div className='container header__top-bar'>
            <div className='header-logo'>
              <img src={headerLogo} alt="" />
            </div>
            <nav>
              <ul className='nav-block'>
                <li className='nav-item'><NavLink className='nav-link' to='/'>Home</NavLink></li>
                <li className='nav-item'><NavLink className='nav-link' to='/movies'>Movies & Shows</NavLink></li>
                <li className='nav-item'><NavLink className='nav-link' to='/support'>Support</NavLink></li>
                <li className='nav-item'><NavLink className='nav-link' to='/subscriptions'>Subscriptions</NavLink></li>
              </ul>
            </nav>
            <div className='header__functions-block'>
              <div className='header__function header__search'>
                <img src={headerSearch} alt="" />
              </div>
              <div className='header__function header__notification'>
                <img src={headerNotification} alt="" />
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  )
}

export default Header