import React from 'react'

import './ButtonRemove.scss'
import { FaTrashAlt } from 'react-icons/fa'

const ButtonRemove = ({onClick}) => {
  return (
    <button className="button-remove" onClick={onClick}>
      <FaTrashAlt/>
    </button>
  )
}

export default ButtonRemove
