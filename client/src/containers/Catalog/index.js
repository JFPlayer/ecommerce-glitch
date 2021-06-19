import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import './Catalog.scss'
import NavHistory from '../../components/NavHistory'
import CatalogContent from '../../components/CatalogContent'

import { setCategory, setSubcategory } from '../../redux/productsDucks'

const Catalog = ({ type }) => {
  const [bannerURL, setBannerURL] = useState('')
  const { id } = useParams()
  
  const { historyNav } = useSelector(state => state.global)
  const { category, subcategory } = useSelector(state => state.products)
  const { categories } = useSelector(state => state.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    if(type === 'category') dispatch(setCategory(id))
    if(type === 'subcategory') dispatch(setSubcategory(id))
  }, [id])

  useEffect(() => {
    if(historyNav[0]?.title && subcategory) {
      dispatch({
        type: 'SET_NAVIGATION',
        payload: historyNav.slice(0,1),
      })
    }
  }, [])

  useEffect(() => {
    scrollTo(0,0)

    if(category && categories.length) {
      const categoryURL = categories.reduce((acc, category) => {
        if (category.image && category._id === id) return category.image.URL
        return acc
      }, '')
      setBannerURL(categoryURL)
    }else {
      setBannerURL('')
    }
  }, [category, categories])

  return (
    <>
      {bannerURL &&
        <div className="catalog-ads">
          <div className="catalog-ads-container">
            <img src={bannerURL} alt=""/>
          </div>
        </div>
      }
      <NavHistory/>
      <div className="catalog">
        <CatalogContent/>
      </div>
    </>
  )
}

export default Catalog
