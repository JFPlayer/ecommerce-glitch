import React from 'react'

import './Button.scss'

const Button = ({ children, type, disabled, primary, onClick, logo}) => {

  return (
    <button 
      className={
        `button ${primary ? 'button--primary' : ''} ${disabled ? 'button--disabled' : ''} ${logo ? `button--${logo}` : ''}`
      }
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
