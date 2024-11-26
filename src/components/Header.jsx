import React from 'react'
import logo from '../assets/IconicLogo.png'

function Header() {

  return (
    <>
      <header>
        <a href="https://www.montologyco.com" target="_blank">
          <img src={logo} className="logo" alt="logo"/>
        </a>
        <nav>
          <ul>test</ul>
        </nav>
      </header>
    </>
  )
}

export default Header