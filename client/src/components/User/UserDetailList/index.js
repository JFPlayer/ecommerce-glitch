import React, { useState } from 'react'

import './UserDetailList.scss'
import { TiDelete }from 'react-icons/ti'
import { HiOutlineSave }from 'react-icons/hi'

const UserDetailList = ({ specs= [] , setSpecs, className='' }) => {
  const [newItem, setNewItem] = useState({ title: '', content: '' })

  const handleChange = event => {
    setNewItem({ ...newItem, [event.target.name]: event.target.value })
  }

  const handleClick = () => {
    setSpecs([...specs, newItem])
    setNewItem({ title: '', content: '' })
  }

  const handleDelete = index => {
    setSpecs([...specs.slice(0, index), ...specs.slice(index + 1)])
  }

  return (
    <div className={`user-dl ${className}`}>
      <span className="user-dl__title">
        Especificaciones
      </span>
      <div className="user-dl__list">
        <div className="user-dl__row">
          <div className="user-dl__row-item left">
            <input 
              type="text"
              name="title" 
              placeholder="Titulo..."
              value={newItem.title} 
              onChange={handleChange}
            />
          </div>
          <div className="user-dl__row-item right">
            <input 
              type="text" 
              name="content" 
              placeholder="Contenido..."
              value={newItem.content} 
              onChange={handleChange}
            />
          </div>
          <button type="button" className="user-dl__row-btn new" onClick={handleClick}>
            <HiOutlineSave/>
          </button>
        </div>
        
        {specs.map(({ title, content }, index) => (
          <div className="user-dl__row" key={title}>
            <div className="user-dl__row-item left">
              {title}
            </div>
            <div className="user-dl__row-item right">
              {content}
            </div>
            <button className="user-dl__row-btn" onClick={() => handleDelete(index)}>
              <TiDelete/>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserDetailList
