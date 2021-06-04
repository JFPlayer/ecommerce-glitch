import React, { useRef, useState } from 'react'

import './UserDetailList.scss'
import { TiDelete }from 'react-icons/ti'
import { HiOutlineSave }from 'react-icons/hi'

const specs = {
  ['Marca']: 'Asus',
  ['Modelo']: 'X512s',
  ['Peso']: '1.4',
}

const UserDetailList = () => {
  const [list, setList] = useState({...specs})
  const [row, setRow] = useState({ name: '', value: '' })

  const handleChange = event => {
    setRow({ ...row, [event.target.name]: event.target.value })
  }

  const handleClick = () => {
    // console.log(row)
    setList({ [row.name]: row.value, ...list })
    setRow({ name: '', value: '' })
  }

  const handleDelete = field => {
    const { [field]: deleted, ...newList } = list
    setList(newList)
  }

  return (
    <div className="user-dl">
      <span className="user-dl__title">
        Especificaciones
      </span>
      <div className="user-dl__list">
        <div className="user-dl__row">
          <div className="user-dl__row-item left">
            <input type="text"
              name="name" 
              placeholder="Titulo..."
              value={row.name} 
              onChange={handleChange}
            />
          </div>
          <div className="user-dl__row-item right">
            <input 
              type="text" 
              name="value" 
              placeholder="Contenido..."
              value={row.value} 
              onChange={handleChange}
            />
          </div>
          <button type="button" className="user-dl__row-btn new" onClick={handleClick}>
            <HiOutlineSave/>
          </button>
        </div>
        
        {Object.entries(list).map(([name, value]) => (
          <div className="user-dl__row" key={name}>
            <div className="user-dl__row-item left">
              {name}
            </div>
            <div className="user-dl__row-item right">
              {value}
            </div>
            <button className="user-dl__row-btn" onClick={() => handleDelete(name)}>
              <TiDelete/>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserDetailList
