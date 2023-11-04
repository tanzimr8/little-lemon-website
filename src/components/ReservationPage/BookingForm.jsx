import React from 'react'
import Icon from './../../images/meeting.png'
import SubmittedIcon from './../../images/submitted.png'
const BookingForm = ({state,dispatch,availabeTimes,availabeOccassions,handleSubmit,isValidated, isSubmitted}) => {
  return (
    <div>
      <div className="form-booking" style= {isSubmitted ? {display: 'none'} : {display:'flex'}}>
        <img src={Icon} alt="meeting icon" />
        <h2 className='text-center my-3'>Book a Table</h2>
        <form className='form' onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="input-group">
                    <input id="date" name="date" placeholder="Answer" className="form-control"  type="date"
                    value = {state.date} onChange = {(e)=>{dispatch({type: 'HANDLE DATE CHANGE', payload: e.target.value, field: e.target.name })}}
                    />
                </div>
            </div>
            <div className="form-group">
                <div class="input-group">
                    <select name='time' className="form-control" id="sel1" value={state.time} onChange={(e)=>{dispatch({type:"HANDLE TIME CHANGE", payload:e.target.value, field: e.target.name })}}   >
                        <option selected="true" disabled="disabled">Choose Time</option>
                        {availabeTimes.map((availabeTime)=>{
                            return <option>{availabeTime}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="form-group">
                    <div className="input-group">
                        <input id="number" name="numberOfGuest" placeholder="Number of guests" min="1" max="10" className="form-control"  type="number" value = {state.numberOfGuest}  onChange={(e)=>{dispatch({type:"HANDLE GUEST NUMBER CHANGE", payload: e.target.value, field: e.target.name})}}/>
                    </div>
                </div>
            <div className="form-group">
                <div class="input-group">
                    <select className="form-control" id="sel1" name='occassions' value={state.occassion}
                    onChange={(e)=>{dispatch({type:"HANDLE OCCASSION CHANGE", payload: e.target.value, field:e.target.name})}}
                    >
                        <option selected="true" disabled="disabled">Please Select Occassion</option>
                        {availabeOccassions.map((occassion)=>{
                            return <option>{occassion}</option>
                        })}
                    </select>
                </div>
            </div>
                <div className="form-group">
                    <button disabled={!isValidated()} name="book" className='btn btn-lg btn-success btn-block' type="submit" >BOOK A TABLE</button>
                </div>
            </form>
        </div>
        <div className="form-booked" style= {!isSubmitted ? {display: 'none'} : {display:'flex'}}>
            <div className="booked-message">
                <div className="booked-icon">
                  <img src={SubmittedIcon} width='64px' alt='submitted icon' />
                </div>
                <div className="booked-msg">
                    <h2>You reservation is Booked</h2>
                    <h3>You will get an email with the details</h3>
                </div>
            </div>
            <div className="booked-info">
                 <p><strong>Reservation Date</strong>: {state.date} </p>
                 <p><strong>Reservation time</strong>: {state.time}</p>
                 <p><strong>Number of guests</strong>: {state.numberOfGuest}</p>
                 <p><strong>The Occassion</strong>: {state.occassion}</p>
            </div>
        </div>
    </div>
  )
}

export default BookingForm
