import React, { useState } from 'react'

import './FilterBox.scss'
import { IoIosArrowDown } from 'react-icons/io'

import Checkbox from '../Checkbox'

const marcas = ['samsung', 'xiaomi', 'apple', 'motorola', 'lg', 'alcatel']

const FilterBox = ({ children, title, useForm, items }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`filter-box ${isOpen ? 'open' : ''}`}>

      <div className="filter-box__title" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <IoIosArrowDown/>
      </div>

      <div className='filter-box__content'>
        {/* {!children ? 
          items.map(item => (
            <div className="filter-box__item" key={item}>
              <Checkbox
                useForm={useForm}
                labelText={item}
                name={`${title}-${item}`}
              />
            </div>
          ))
        :
          (children)
        } */}
        {children}
      </div>
    </div>
  )
}

export default FilterBox
