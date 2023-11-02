import React from 'react'
import Icon from './../../images/meeting.png'
const BookingForm = () => {
  return (
    <div>
      <div className="form-booking">
        <img src={Icon} alt="meeting icon" srcset="" />
        <h2 className='text-center my-3'>Book a Table</h2>
        <form >
            <div className="form-group">
                <div className="input-group">
                    <input id="date" name="date" placeholder="Answer" className="form-control"  type="date"/>
                </div>
            </div>
            <div className="form-group">
                <div class="input-group">
                    <select className="form-control" id="sel1">
                        <option selected="true" disabled="disabled">Choose Time</option>
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                    <div className="input-group">
                        <input id="number" name="number" placeholder="Number of table" className="form-control"  type="number"/>
                    </div>
                </div>
            <div className="form-group">
                <div class="input-group">
                    <select className="form-control" id="sel1">
                        <option selected="true" disabled="disabled">Please Select Occassion</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
            </div>
                
                <div className="form-group">
                    <input name="book" className="btn btn-lg btn-success btn-block btnForget" value="Book a table" type="submit"/>
                </div>
            </form>
      </div>
    
    </div>
  )
}

export default BookingForm
