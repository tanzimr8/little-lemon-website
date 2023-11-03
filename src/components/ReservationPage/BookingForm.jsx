import React from 'react'
import Icon from './../../images/meeting.png'
const BookingForm = (props) => {
  return (
    <div>
      <div className="form-booking">
        <img src={Icon} alt="meeting icon" srcset="" />
        <h2 className='text-center my-3'>Book a Table</h2>
        <form className='form'>
            <div className="form-group">
                <div className="input-group">
                    <input id="date" name="date" placeholder="Answer" className="form-control"  type="date"
                    value = {props.date}
                    />
                </div>
            </div>
            <div className="form-group">
                <div class="input-group">
                    <select className="form-control" id="sel1">
                        <option selected="true" disabled="disabled">Choose Time</option>
                        {props.availabeTimes.map((availabeTime)=>{
                            return <option>{availabeTime}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="form-group">
                    <div className="input-group">
                        <input id="number" name="number" placeholder="Number of guests" className="form-control"  type="number" value = {props.numberOfGuest}/>
                    </div>
                </div>
            <div className="form-group">
                <div class="input-group">
                    <select className="form-control" id="sel1">
                        <option selected="true" disabled="disabled">Please Select Occassion</option>
                        {props.occassions.map((occassion)=>{
                            return <option>{occassion}</option>
                        })}
                    </select>
                </div>
            </div>
                
                <div className="form-group">
                    <input name="book" className="btn btn-lg btn-success btn-block btnBook" value="BOOK TABLE" type="submit"/>
                </div>
            </form>
      </div>
    
    </div>
  )
}

export default BookingForm
