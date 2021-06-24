import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import './SearchResult.scss'

import { setSlideOutOpen } from '../../redux/globalDucks'
import { setSelectedProduct } from '../../redux/productsDucks'

const SearchResult = () => {
  const { searchedProducts } = useSelector(state => state.products)
  const dispatch = useDispatch()

  const history = useHistory()

  const handleClick = event => {
    event.preventDefault()
    const product = searchedProducts.find(({ _id }) => _id === event.target.dataset.id)
    dispatch(setSelectedProduct(product))
    history.push(`/products/${product._id}`)
    dispatch(setSlideOutOpen(''))
  }

  return (
    <div 
      className="search-result"
      onClick={e => e.stopPropagation()}
    >
      <div className="search-result__list">
        {searchedProducts.map(product => 
          <a 
            key={product._id} 
            className="search-result__row"
            data-id={product._id}
            onClick={handleClick}
          >
            {product.title}
          </a>
        )}
      </div>
    </div>
  )
}

export default SearchResult
