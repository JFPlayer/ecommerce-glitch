import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './UserCategories.scss'
import { HiOutlineSave } from 'react-icons/hi'
import { TiDelete } from 'react-icons/ti'

import Button from '../../Button'

import { createCategory, deleteCategory, createSubcategory, deleteSubcategory } from '../../../redux/categoriesDucks'

const UserCategories = () => {
  const [inputCategory, setInputCategory] = useState("")
  const [inputSubcategory, setInputSubcategory] = useState("")

  const dispatch = useDispatch()
  const { categories } = useSelector(state => state.categories)

  const [categorySelected, setCategorySelected] = useState(null)
  

  const handleCreateCategory = (event) => {
    event.preventDefault()
    const isRepeated = categories.some(({title}) => title === inputCategory )
    if(isRepeated) {
      console.log('ya existe la categoria ', inputCategory)
    }else {
      dispatch(createCategory(inputCategory))
    }
    setInputCategory('')
  }
  
  const handleCreateSubcategory = (event) => {
    event.preventDefault()

    const isRepeated = categories[categorySelected].subcategories.some(({title}) => title === inputSubcategory )
    if(isRepeated) {
      console.log('ya existe la subcategoria ', inputSubcategory)
    }else {
      dispatch(createSubcategory(categorySelected, inputSubcategory))
    }
    setInputSubcategory('')
  }

  const handleDeleteCategory = (categoryIndex, categoryId) => () => {
    dispatch(deleteCategory(categoryIndex, categoryId))
    setCategorySelected(null)
  }

  const handleDeleteSubcategory = (subcategoryIndex, subcategoryId) => () => {
    dispatch(deleteSubcategory(categorySelected, subcategoryIndex, subcategoryId))
  }

  return (
    <div className="user-categories">
      <div className="user__section">
        <div className="user__title">
          Categorias y Subcategorias
        </div>
        <div className="user__section-content">
          <div className="user-categories__wrapper">
            <div className="user-categories__section">
              <div className="user-categories__title">
                Categorias
              </div>
              <div className="user-categories__list">

                <form 
                  className="user-categories__row"
                  onSubmit={handleCreateCategory}
                >
                  <input 
                    type="text"
                    placeholder="Nueva Categoria..." 
                    value={inputCategory} 
                    onChange={event => setInputCategory(event.target.value)}
                  />
                  <Button
                    primary
                    type="submit"
                  >
                    <HiOutlineSave/>
                  </Button>
                </form>
                {categories.map(({ title, _id }, index) => 
                  <div className="user-categories__row" key={_id}>
                    <div className="user-categories__row-title" onClick={() => setCategorySelected(index)}>
                      {title}
                    </div>
                    <Button 
                      className="user-categories__btn-remove"
                      onClick={handleDeleteCategory(index, _id)}
                    >
                      <TiDelete/>
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div className="user-categories__section">
              <div className="user-categories__title">
                {categorySelected === null ?
                  'Subcategorias'
                :
                  categories[categorySelected].title
                }
              </div>
              <div className="user-categories__list">

                {categorySelected !== null ? 
                  <>
                  <form 
                    className="user-categories__row"
                    onSubmit={handleCreateSubcategory}
                  >
                    <input 
                      type="text" 
                      placeholder="Nueva Categoria..."
                      value={inputSubcategory}
                      onChange={event => setInputSubcategory(event.target.value)}
                    />
                    <Button
                      primary
                      type="submit"
                    >
                      <HiOutlineSave/>
                    </Button>
                  </form>
                  {categories[categorySelected].subcategories.map(({ title, _id }, index) => 
                    <div className="user-categories__row" key={_id}>
                      <div className="user-categories__row-title">
                        {title}
                      </div>
                      <Button 
                        className="user-categories__btn-remove"
                        onClick={handleDeleteSubcategory(index, _id)}
                      >
                        <TiDelete/>
                      </Button>
                    </div>
                  )}
                  </>
                :
                  <div className="user-categories__row">
                    Seleccione una categoria
                  </div>
                }

              </div>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default UserCategories
