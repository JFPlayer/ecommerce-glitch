import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import './SearchBar.scss'
import { BiSearch } from 'react-icons/bi';

import { getProductsByKeyWord, setSelectedProduct } from '../../redux/productsDucks'
import { setSlideOutOpen } from '../../redux/globalDucks'

const SearchBar = ({ className='', isFocus }) => {
  const dispatch = useDispatch()
  const { searchedProducts } = useSelector(state => state.products)

  const history = useHistory()

  const [inputValue, setInputValue] = useState('')

  const handleChange = event => {
    setInputValue(event.target.value)
    if(event.target.value.length > 2) {
      dispatch(getProductsByKeyWord(event.target.value))
    }
    dispatch(setSlideOutOpen('searchResult'))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(searchedProducts.length) {
      dispatch(setSelectedProduct(searchedProducts[0]))
      history.push(`/products/${searchedProducts[0]._id}`)
    }
  };

  return (
    <div className={`search-bar ${className} ${isFocus ? 'active' : ''}`}>
      <form className="search-bar__content" onSubmit={handleSubmit}>
        <input
          className="search-bar__input"
          type="text" 
          name="keyWord"
          value={inputValue}
          onChange={handleChange}
          autoComplete="off"
        />
        <button className="search-bar__btn">
          <BiSearch/>
        </button>
      </form>
    </div>
  )
}

export default SearchBar
