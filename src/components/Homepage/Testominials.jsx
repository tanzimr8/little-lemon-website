import React from 'react';
import Avatar1 from './../../images/avatar-1.png'
import Avatar2 from './../../images/avatar-2.png'
import Avatar3 from './../../images/avatar-3.png'

const Testominials = () => {
  return (
    <>
      <h2 className='text-center'>Testominials</h2>
      <div className='testimonials'>
        <div className="testimonial-card">
          {/* <div className="rating">Star</div> */}
          <div className="customer">
            <div className="customer-avatar">
              <img src={Avatar1} alt="Avatar"  />
            </div>
            <div className="customer-name">Harry Potter</div>
          </div>
          <div className="review">
            <blockquote className='blockquote'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi expedita repellat minima, non enim provident aut nulla ipsam doloremque iusto nihil at nisi? Sint et temporibus quaerat accusamus recusandae."</blockquote>
          </div>
        </div>

        <div className="testimonial-card">
          {/* <div className="rating">Star</div> */}
          <div className="customer">
            <div className="customer-avatar">
              <img src={Avatar2} alt="Avatar"  />
            </div>
            <div className="customer-name">Black widow</div>
          </div>
          <div className="review">
            <blockquote className='blockquote'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi expedita repellat minima, non enim provident aut nulla ipsam doloremque iusto nihil at nisi? Sint et temporibus quaerat accusamus recusandae."</blockquote>
          </div>
        </div>

        <div className="testimonial-card">
          {/* <div className="rating">Star</div> */}
          <div className="customer">
            <div className="customer-avatar">
              <img src={Avatar3} alt="Avatar"  />
            </div>
            <div className="customer-name">Ironman</div>
          </div>
          <div className="review">
            <blockquote className='blockquote'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi expedita repellat minima, non enim provident aut nulla ipsam doloremque iusto nihil at nisi? Sint et temporibus quaerat accusamus recusandae."</blockquote>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testominials
