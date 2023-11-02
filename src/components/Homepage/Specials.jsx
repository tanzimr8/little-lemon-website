import React from 'react'
import { Link } from 'react-router-dom';
import MenuImage1 from './../../images/menu-1.jpg';
import MenuImage2 from './../../images/menu-2.jpg';
import MenuImage3 from './../../images/menu-3.jpg';
const Specials = () => {
  return (
    <>
      <div className="specials">
        <div className="upper-section">
          <h2>This weeks specials!</h2>
          <div >
            <Link className='cta' to='./'> Online Menu</Link>
          </div>
        </div>
        <div className="bottom-section">
          <div className="menu-card">
            <div className="menu-image">
              <img src={MenuImage1} alt="food menu" />
            </div>
            <div className="menu-content">
              <div className="menu-item">
                <div className="item-name">Greek Salad</div>
                <div className="item-price">$12.99</div>
              </div>
              <div className="menu-description">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, blanditiis? Aut, nostrum? A ratione assumenda debitis facilis cum. Veniam deleniti magnam recusandae impedit temporibus vitae dolores unde repellat, illo assumenda.</p>
              </div>
              <div className="menu-cta">
                <p>Order a delevery</p>
              </div>
              </div>
          </div>
          <div className="menu-card">
            <div className="menu-image">
              <img src={MenuImage2} alt="food menu" />
            </div>
            <div className="menu-content">
              <div className="menu-item">
                <div className="item-name">Bruchetta</div>
                <div className="item-price">$5.99</div>
              </div>
              <div className="menu-description">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, blanditiis? Aut, nostrum? A ratione assumenda debitis facilis cum. Veniam deleniti magnam recusandae impedit temporibus vitae dolores unde repellat, illo assumenda.</p>
              </div>
              <div className="menu-cta">
                <p>Order a delevery</p>
              </div>
              </div>
          </div>
          <div className="menu-card">
            <div className="menu-image">
              <img src={MenuImage3} alt="food menu" />
            </div>
            <div className="menu-content">
              <div className="menu-item">
                <div className="item-name">Salad</div>
                <div className="item-price">$14.99</div>
              </div>
              <div className="menu-description">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, blanditiis? Aut, nostrum? A ratione assumenda debitis facilis cum. Veniam deleniti magnam recusandae impedit temporibus vitae dolores unde repellat, illo assumenda.</p>
              </div>
              <div className="menu-cta">
                <p>Order a delevery</p>
              </div>
              </div>
          </div>
        </div>
      </div>

      
    </>
  )
}

export default Specials
