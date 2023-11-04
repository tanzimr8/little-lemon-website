import React, { useReducer, useEffect, useState } from 'react'
import BookingForm from './BookingForm'
import { FormReducer } from './FormReducer';
import { fetchAPI } from './fetchAPI';
const Index = () => {
  const initialFormState = {
    date : "",
    time:"",
    numberOfGuest: '',
    occassions: ''
  };
  const [state,dispatch] = useReducer(FormReducer,initialFormState);
  const availabeTimes= fetchAPI(state.date);;
  const availabeOccassions= ['Birthday', 'Anniversary','Marriage'];
  // const [isValidated, setIsValidated] = useState(false);
  const handleSubmit = (e)=>{
    e.preventDefault();
    
    alert('formSubmitted');
  }
  const isValidated = ()=>{
    if(state.date !== '' && state.time !== '' && state.numberOfGuest !=='' && state.occassions !==''){
      return true;
    }
    else{
      return false;
    }
  }
  return (
    <div className='reservation'>
      {<BookingForm
        state={state} dispatch = {dispatch} availabeTimes= {availabeTimes} availabeOccassions= {availabeOccassions} handleSubmit= {handleSubmit} isValidated={isValidated}
      />}
    </div>
  )
}

export default Index
