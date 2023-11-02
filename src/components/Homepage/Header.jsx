import React from 'react'
import { Link } from 'react-router-dom';
import Image from './../../images/header-image.jpg'
const Header = () => {
  return (
    <header>
      <div className="header-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quibusdam deserunt quaerat, non, hic perferendis voluptatibus ea dolor porro, maxime commodi minima culpa accusantium reiciendis ullam recusandae? Cum, animi unde?</p>
        <Link to='/' className="cta btn-reserve">Reserve a Table</Link>
      </div> 
      <div className="header-image">
        <img src={Image} alt='restaurant food'/>
      </div> 
    </header>
  )
}

export default Header
