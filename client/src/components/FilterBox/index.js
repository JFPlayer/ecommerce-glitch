import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import './FilterBox.scss'
import { IoIosArrowDown } from 'react-icons/io'

import Checkbox from '../Checkbox'

const marcas = ['samsung', 'xiaomi', 'apple', 'motorola', 'lg', 'alcatel']

const FilterBox = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false)

  const { register, handleSubmit, watch } = useForm()
  const form = {
    register,
    watch
  }

  return (
    <div className={`filter-box ${isOpen ? 'open' : ''}`}>

      <div className="filter-box__title" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <IoIosArrowDown/>
      </div>

      <div className='filter-box__content'>
        {!children ? 
          marcas.map(item => (
            <div className="filter-box__item" key={item}>
              <Checkbox
                useForm={form}
                labelText={item}
                name={item}
              />
            </div>
          ))
        :
          (children)
        }
      </div>
    </div>
  )
}

export default FilterBox
