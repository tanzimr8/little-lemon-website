import React, { useState } from 'react'
import BookingForm from './BookingForm'
const Index = () => {
  const [date,setDate] = useState('');
  const [availabeTimes, setAvailabeTimes] = useState(["17:00","18:00","19:00","20:00","21:00"]);
  const [numberOfGuest,setnumberOfGuest] = useState('');
  const [occassions, setOccassions] = useState(['Birthday', 'Anniversary','Marriage']);
  return (
    <div className='reservation'>
      <BookingForm 
      date = {date} setDate = {setDate}
      availabeTimes= {availabeTimes} setAvailabeTimes = {setAvailabeTimes}
      numberOfGuest = {numberOfGuest} setnumberOfGuest = {setnumberOfGuest}
      occassions = {occassions} setOccassions = {setOccassions}
      />
    </div>
  )
}

export default Index
