import React from 'react'

import './Button.scss'

const Button = ({ children, light, type, disabled, primary, onClick, logo = '', className = ''}) => {

  return (
    <button 
      className={`button ${light ? 'light' : ''} ${primary ? 'primary' : ''} ${disabled ? 'disabled' : ''} ${logo} ${className}`}
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
