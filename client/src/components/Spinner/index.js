import React from 'react'

import './Spinner.scss'

const Spinner = ({ className }) => {
  return (
    <div className={`spinner ${className ? className : ''}`}>
      
    </div>
  )
}

export default Spinner
