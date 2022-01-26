import React from 'react'
import { useState, useEffect } from 'react'

const TimeDate = () => {
  var t
  const [timeDate, setTimeDate] = useState({})

  useEffect(()=>{
    currentTime()
  },[t])

  const currentTime = () => {
    var date = new Date()
    var hour = date.getHours()
    var min = date.getMinutes()
    var sec = date.getSeconds()
    t = setTimeout(function(){ currentTime() }, 1000)
    setTimeDate({hour,min,sec})
  }

  return (
    <div className='time-date'>
      <div className=''>{timeDate.hour}:{timeDate.min}:{timeDate.sec}</div>
    </div>
  )
}

export default TimeDate
