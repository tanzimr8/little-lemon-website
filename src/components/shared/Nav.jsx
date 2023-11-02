import React from 'react'
import Logo from './../../logo.svg';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'><img src={Logo} alt='Logo'/></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/'>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/'>Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/reservation'>Reservation</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/'>Order Online</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/'>Login</Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
