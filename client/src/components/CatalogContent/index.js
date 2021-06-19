import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import './CatalogContent.scss'
import { IoOptions } from 'react-icons/io5'

import CatalogList from '../CatalogList'
import FilterBox from '../FilterBox'
import Button from '../Button'
import Checkbox from '../Checkbox'
import Pagination from '../Pagination'

import { getBrands } from '../../redux/globalDucks'

const CatalogContent = () => {
  const { register, watch, handleSubmit, reset } = useForm()
  const form = { register, watch }

  const [isMenuDropDownActive, setIsMenuDropDownActive] = useState(false)

  const dispatch = useDispatch()
  const { orderBy, filterByBrand, category, subcategory } = useSelector(state => state.products)
  const { brands } = useSelector(state => state.global)


  const handleSelectChange = (event) => [
    dispatch({ type: 'SET_ORDER', payload: event.target.value})
  ]

  const onSubmit = data => {
    if(Object.values(data).some(value => value) || filterByBrand.length > 1) {
      const brandsFilter = Object.keys(data).filter(name => data[name])
      dispatch({
        type: 'SET_FILTER_BRANDS',
        payload: brandsFilter,
      })
    }
  }

  useEffect(() => {
    if(category || subcategory) {
      dispatch(getBrands())
    }
  }, [category, subcategory])

  useEffect(() => {
    reset()
  }, [brands])

  return (
    <div className="catalog__container">
      <div className="catalog__filters">

        <button className="filter__btn" onClick={() => setIsMenuDropDownActive(!isMenuDropDownActive)}>
          <IoOptions/>
          Filtrar
        </button>

        <div className={`filter__container ${isMenuDropDownActive ? 'active' : ''}`}>
          
          <div className="filter__title">
            <IoOptions/>
            <span>
              FILTROS
            </span>
          </div>

          <FilterBox title="Marca">
            {Object.entries(brands).map(brand => 
              <div className="filter-box__item" key={brand[0]}>
                <Checkbox
                useForm={form}
                labelText={`${brand[0]} (${brand[1]})`}
                name={brand[0]}
              />
              </div>
            )}
          </FilterBox>
          {/* <FilterBox title="Categoria" useForm={form} items={categorias}/> */}
          {/* <FilterBox title="Subcategoria" useForm={form}/> */}

          <div className="filter__action">
            <Button
              primary
              onClick={handleSubmit(onSubmit)}
            >
              Aplicar filtro
            </Button>
          </div>
        </div>

        <div className="order">
          <div>
            Ordenar por:
          </div>
          <select 
            value={orderBy}
            name="orderBy"
            className="order__select"
            onChange={handleSelectChange}
          >
            <option value="asc">Menor Precio</option>
            <option value="desc">Mayor Precio</option>
            <option value="sequence">Recomendado</option>
          </select>
        </div>

      </div>

      <div className="catalog__list">
        <CatalogList/>
        
        <Pagination/>
      </div>
    </div>
  )
}

export default CatalogContent
