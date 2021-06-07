import React from 'react'
import Button from '../../Button'

import './UserCategories.scss'
import { HiOutlineSave } from 'react-icons/hi'
import { TiDelete } from 'react-icons/ti'

const UserCategories = () => {
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

                <form className="user-categories__row">
                  <input type="text" name="newCategory" placeholder="Nueva Categoria..."/>
                  <Button
                    primary
                  >
                    <HiOutlineSave/>
                  </Button>
                </form>

                <div className="user-categories__row">
                  <div className="user-categories__row-title">
                    Informatica
                  </div>
                  <Button 
                    className="user-categories__btn-remove"
                  >
                    <TiDelete/>
                  </Button>
                </div>
              </div>
            </div>

            <div className="user-categories__section">
              <div className="user-categories__title">
                Subcategorias
              </div>
              <div className="user-categories__list">

                {true ? 
                  <div className="user-categories__row">
                    Seleccione una categoria
                  </div>
                :
                  <>
                  <form className="user-categories__row">
                    <input type="text" name="newCategory" placeholder="Nueva Categoria..."/>
                    <Button
                      primary
                    >
                      <HiOutlineSave/>
                    </Button>
                  </form>

                  <div className="user-categories__row">
                    <div className="user-categories__row-title">
                      Informatica
                    </div>
                    <Button 
                      className="user-categories__btn-remove"
                    >
                      <TiDelete/>
                    </Button>
                  </div>
                  </>
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
