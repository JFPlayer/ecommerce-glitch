import React, { useState } from 'react'

import './SearchBar.scss'
import SearchIcon from "../../assets/searchIcon.svg";


const SearchBar = () => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = event => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <div className="search-bar">
      <form className="search-bar__box" onSubmit={handleSubmit}>
        <input
          className="search-bar__field"
          type="text" 
          name="search" 
          value={inputValue}
          onChange={handleChange}
        />
        <button className="search-bar__button">
          <SearchIcon/>
        </button>
      </form>
    </div>
  )
}

export default SearchBar
