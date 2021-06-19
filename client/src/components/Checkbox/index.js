import React from 'react'

import './Checkbox.scss'

import CheckIcon from '../../assets/checkIcon.svg'
import MixedIcon from '../../assets/mixedIcon.svg'

const Checkbox = ({ useForm, name, labelText, mixed, light }) => {

  const isChecked = useForm.watch(name)

  return (
    <label htmlFor={name} className={`checkbox__container ${light && 'light'}`}>
      <div className={`checkbox ${isChecked || mixed ? 'isChecked' : ''}`}>
        {!mixed ? isChecked && <CheckIcon/> : isChecked ? <CheckIcon/> : <MixedIcon/>}
        <input {...useForm.register(name)} type="checkbox" id={name}/>
      </div>
      {labelText && 
        <span>{labelText}</span>
      }
      {/* {labelText && 
        <label htmlFor={name}>{labelText}</label>
      } */}
    </label>
  )
}

export default Checkbox
