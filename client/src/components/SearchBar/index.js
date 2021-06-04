import React, { useState } from 'react'

import './SearchBar.scss'
import { BiSearch } from 'react-icons/bi';


const SearchBar = ({ className='', isFocus }) => {

  const [inputValue, setInputValue] = useState('')

  const handleChange = event => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <div className={`search-bar ${className} ${isFocus ? 'active' : ''}`}>
      <form className="search-bar__content" onSubmit={handleSubmit}>
        <input
          className="search-bar__input"
          type="text" 
          name="search"
          value={inputValue}
          onChange={handleChange}
        />
        <button className="search-bar__btn">
          <BiSearch/>
        </button>
      </form>
    </div>
  )
}

export default SearchBar
