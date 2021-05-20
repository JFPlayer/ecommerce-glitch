import React from 'react'

import './Button.scss'

const Button = ({ children, disabled, primary, onClick }) => {
  return (
    <button 
      className="button button--primary"
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
