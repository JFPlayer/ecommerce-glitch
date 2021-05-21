import React from 'react'

import './Slideout.scss'

const Slideout = ({Component, top, toClose}) => {
  return (
    <div className="slideout" style={{top: top}} onClick={toClose}>
      <Component toClose={toClose}/>
    </div>
  )
}

export default Slideout
