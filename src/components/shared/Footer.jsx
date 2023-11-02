import React from 'react'
import logo from './../../images/logo.png'
const Footer = () => {
  return (
    <>
    <footer>
      <div className="footer-col-1">
        <img src={logo} alt="LOGO" srcset="" />
      </div>
      <div className="footer-col-2">
        <div className="sitemap">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Order Online</li>
          </ul>
        </div>
      </div>
      <div className="footer-col-3">
        <div className="contact">
          <ul>
            <li>Address: Chicago, US</li>
            <li>Phone: +1709XXXXXXX</li>
            <li>Email: hello@littlelemonapp.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-col-4">
        <div className="social-media">
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Youtube</p>
        </div>
      </div>
    </footer>
    <div className="footer-bottom">
        <p>2023 Little Lemon Restaurant. All rights reserved</p>
    </div>
    </>
  )
}

export default Footer
