import React, { useReducer, useState } from 'react'
import BookingForm from './BookingForm'
const FormReducer = (state,action)=>{
  switch(action.type){
    case "HANDLE DATE CHANGE" : 
    return {
      ...state,
      [action.field]: action.payload,
    };
    case "HANDLE TIME CHANGE" : 
    return {
      ...state,
      [action.field]: action.payload,
    };
    case "HANDLE GUEST NUMBER CHANGE" : 
    return {
      ...state,
      [action.field]: action.payload,
    };
    case "HANDLE OCCASSION CHANGE" : 
    return {
      ...state,
      [action.field]: action.payload,
    };
    default : return state;
  }
}

const Index = () => {
  // const [date,setDate] = useState('');
  // const [availabeTimes, setAvailabeTimes] = useState(["17:00","18:00","19:00","20:00","21:00"]);
  // const [numberOfGuest,setnumberOfGuest] = useState('');
  // const [occassions, setOccassions] = useState(['Birthday', 'Anniversary','Marriage']);
  const availabeTimes= ["17:00","18:00","19:00","20:00","21:00"];
  const availabeOccassions= ['Birthday', 'Anniversary','Marriage'];
  
  const initialFormState = {
    date : "",
    time:"",
    numberOfGuest: '',
    occassions: ''
  };
  const [state,dispatch] = useReducer(FormReducer,initialFormState)
  return (
    <div className='reservation'>
      {<BookingForm
        state={state} dispatch = {dispatch} availabeTimes= {availabeTimes} availabeOccassions= {availabeOccassions}
      />}
      {/* <BookingForm 
      date = {date} setDate = {setDate}
      availabeTimes= {availabeTimes} setAvailabeTimes = {setAvailabeTimes}
      numberOfGuest = {numberOfGuest} setnumberOfGuest = {setnumberOfGuest}
      occassions = {occassions} setOccassions = {setOccassions}
      /> */}
    </div>
  )
}

export default Index
