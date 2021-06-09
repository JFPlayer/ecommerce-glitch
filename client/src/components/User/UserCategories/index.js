import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './UserCategories.scss'
import { HiOutlineSave } from 'react-icons/hi'
import { TiDelete } from 'react-icons/ti'

import Button from '../../Button'

import { getCategories, newCategory, deleteCategory, newSubcategory, deleteSubcategory } from '../../../redux/categoriesDucks'

const UserCategories = () => {
  const [inputCategory, setInputCategory] = useState("")
  const [inputSubcategory, setInputSubcategory] = useState("")

  const dispatch = useDispatch()
  const { categories } = useSelector(state => state.categories)

  const [selectedCategory, setSelectedCategory] = useState(null)
  
  // useEffect(() => {
  //   dispatch(getCategories())
  // }, [])

  const handleNewCategory = (event) => {
    event.preventDefault()

    const isRepeated = categories.some(({title}) => title === inputCategory )
    if(isRepeated) {
      console.log('ya existe la categoria ', inputCategory)
    }else {
      dispatch(newCategory(inputCategory))
    }
    setInputCategory('')
  }
  
  const handleNewSubcategory = (event) => {
    event.preventDefault()

    const isRepeated = categories[selectedCategory].subcategories.some(({title}) => title === inputSubcategory )
    if(isRepeated) {
      console.log('ya existe la subcategoria ', inputSubcategory)
    }else {
      dispatch(newSubcategory(selectedCategory, inputSubcategory))
    }
    setInputSubcategory('')
  }

  const handleDeleteCategory = (categoryIndex, categoryId) => () => {
    dispatch(deleteCategory(categoryIndex, categoryId))
    setSelectedCategory(null)
  }

  const handleDeleteSubcategory = (subcategoryIndex, subcategoryId) => () => {
    dispatch(deleteSubcategory(selectedCategory, subcategoryIndex, subcategoryId))
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
                  onSubmit={handleNewCategory}
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
                    <div className="user-categories__row-title" onClick={() => setSelectedCategory(index)}>
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
                {selectedCategory === null ?
                  'Subcategorias'
                :
                  categories[selectedCategory].title
                }
              </div>
              <div className="user-categories__list">

                {selectedCategory !== null ? 
                  <>
                  <form 
                    className="user-categories__row"
                    onSubmit={handleNewSubcategory}
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
                  {categories[selectedCategory].subcategories.map(({ title, _id }, index) => 
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
