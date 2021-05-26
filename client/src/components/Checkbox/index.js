import React from 'react'

import './Checkbox.scss'

import CheckIcon from '../../assets/checkIcon.svg'
import MixedIcon from '../../assets/mixedIcon.svg'

const Checkbox = ({ useForm, name, labelText, mixed }) => {

  const isChecked = useForm.watch(name)

  return (
    <div className="checkbox__container">
      <div className={`checkbox ${isChecked || mixed ? 'isChecked' : ''}`}>
        {!mixed ? isChecked && <CheckIcon/> : isChecked ? <CheckIcon/> : <MixedIcon/>}
        <input {...useForm.register(name)} type="checkbox" id={name}/>
      </div>
      <label htmlFor={name} style={{marginLeft: `${labelText ? '5px': ''}`}}>{labelText}</label>
    </div>
  )
}

export default Checkbox
