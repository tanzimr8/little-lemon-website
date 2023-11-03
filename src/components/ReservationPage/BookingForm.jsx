import React from 'react'
import Icon from './../../images/meeting.png'
const BookingForm = ({state,dispatch,availabeTimes,availabeOccassions}) => {
  return (
    <div>
      <div className="form-booking">
        <img src={Icon} alt="meeting icon" srcset="" />
        <h2 className='text-center my-3'>Book a Table</h2>
        <form className='form'>
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
                    <input name="book" className="btn btn-lg btn-success btn-block btnBook" value="BOOK TABLE" type="submit"/>
                </div>
            </form>
      </div>
    </div>
  )
}

export default BookingForm
