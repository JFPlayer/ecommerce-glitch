import React, { useEffect, useState } from 'react'

import './CountDown.scss'

const CountDown = ({ date = Date.now() + 1000*60*60*24*2 }) => {
  const [countDown, setCountDown] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  })

  useEffect(() => {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
        
        
    const interval = setInterval(() => {
      
      const countDown = date - Date.now()
  
      setCountDown({
        day: Math.floor(countDown / (day)),
        hour: Math.floor((countDown % (day)) / (hour)),
        minute: Math.floor((countDown % (hour)) / (minute)),
        second: Math.floor((countDown % (minute)) / second),
      })
      
    }, 1000)
    
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <span className="count-down">
      {`${countDown.day} d ${countDown.hour < 10 ? `0${countDown.hour}` : countDown.hour} : ${countDown.minute < 10 ? `0${countDown.minute}` : countDown.minute} : ${countDown.second < 10 ? `0${countDown.second}` : countDown.second}`}
    </span>
  )
}

export default CountDown
