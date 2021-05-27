import React from 'react'

import './Button.scss'

const Button = ({ children, type, disabled, primary, onClick, logo, className}) => {

  return (
    <button 
      className={
        `button ${primary ? 'button--primary' : ''} ${disabled ? 'button--disabled' : ''} ${logo ? `button--${logo}` : ''} ${className}`
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
