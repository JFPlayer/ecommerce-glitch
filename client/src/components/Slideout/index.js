import React, { useEffect, useRef } from 'react'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

import './Slideout.scss'

const Slideout = ({Component, top, toClose}) => {
  const ref = useRef()

  useEffect(() => {
    disableBodyScroll(ref.current)
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [])

  return (
    <div ref={ref} className="slideout" style={{top: top}} onClick={toClose}>
      <Component toClose={toClose}/>
    </div>
  )
}

export default Slideout
