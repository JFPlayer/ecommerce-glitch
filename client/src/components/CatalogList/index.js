import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import './CatalogList.scss'

import ProductCatalog from '../ProductCatalog'

import { getProductsCatalog } from '../../redux/productsDucks'

const CatalogList = () => {
  const dispatch = useDispatch()
  const { products, limit, page, orderBy, paginate, populate, category, subcategory, filterByBrand } = useSelector(state => state.products)

  const location = useLocation()

  useEffect(() => {
    if(location.pathname === '/user/products') {
      dispatch(getProductsCatalog())
    }else {
      if(category || subcategory) {
        dispatch(getProductsCatalog())
      }
    }
  }, [limit,page, orderBy, category, subcategory, filterByBrand, paginate, populate])

  return (
    <div className="catalog-list__container">
      {products.map((product) => (
        <ProductCatalog key={product._id} product={{...product}}/>
      ))}
    </div>
  )
}

export default CatalogList
