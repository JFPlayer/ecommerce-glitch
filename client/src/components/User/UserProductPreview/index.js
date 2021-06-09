import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import './UserProductPreview.scss'
import { AiFillStar } from 'react-icons/ai'

import InputText from '../../InputText'
import ImageUserProducts, { ImageUserProductsNew } from '../ImageUserProducts'
import Button from '../../Button'
import UserDetailList from '../UserDetailList'

import banner from '../../../assets/banner1.png'

const categories = [
  {
    title: 'Celulares',
    cod: '123154',
    subcategories: [
      {
      title: 'Celularesy Smartphones',
      cod: '5778'
      },
      {
      title: 'SmartWatch',
      cod: '65678'
      },
      {
      title: 'Cargadores',
      cod: '65678'
      },
    ]
  },
  {
    title: 'Consolas y Videojuegos',
    cod: '345',
    subcategories: [
      {
      title: 'Playstation 4',
      cod: '278'
      },
      {
      title: 'Playstation 5',
      cod: '354'
      },
      {
      title: 'Xbox',
      cod: '471'
      },
    ]
  },
  {
    title: 'Informatica',
    cod: '645',
    subcategories: [
      {
      title: 'Notebook',
      cod: '123'
      },
      {
      title: 'Tablets',
      cod: '682'
      },
      {
      title: 'Teclados',
      cod: '417'
      },
    ]
  },
]

const UserProductPreview = () => {
  const { handleSubmit, register, watch, formState: {errors} } = useForm()
  const form = {register, watch, errors}

  const [selectedCategory, setSelectedCategory] = useState(null)

  const onSubmit = data => {
    console.log(data)
  }

  const handleChangeSelect = (event) => {
    setSelectedCategory(event.target.selectedIndex - 1)
  }
  
  return (
    <div className="user-pp">
      <div className="user__section">
        <div className="user__title">
          Productos
        </div>
        <div className="user__section-content">
          <div className="user-pp__container">
            <div className="user-pp__images">

              <div className="user-pp__image-preview-container">
                <div className="user-pp__image-preview">
                    <img src={banner} alt=""/>
                </div>

              </div>

              <div className="user-pp__image-thumbs">
                <div className="user-pp__image-thumbs-item">
                  <ImageUserProductsNew
                    useForm={form}
                  />
                </div>
                {[...new Array(5)].map((_, index) => (
                  <div className="user-pp__image-thumbs-item" key={index}>
                    <ImageUserProducts/>
                  </div>
                ))}
              </div>

            </div>

            <form className="user-pp__form" onSubmit={handleSubmit(onSubmit)}>
              <div className="user-pp__form-fields">
                <InputText
                  useForm={form}
                  name="title"
                  labelText="Titulo"
                />
                <InputText
                  useForm={form}
                  name="brand"
                  labelText="Marca"
                />
                <InputText
                  useForm={form}
                  name="sku"
                  labelText="SKU"
                />
                <InputText
                  useForm={form}
                  name="price"
                  labelText="Precio"
                />
                <InputText
                  useForm={form}
                  name="discount"
                  labelText="Descuento"
                />
                <InputText
                  useForm={form}
                  name="stock"
                  labelText="Stock"
                />

                <div className="user-pp__select">
                  <select name="orderBy" onChange={handleChangeSelect}>
                    <option value=''>Categoria</option>
                    {categories.map(({ title, cod }) => (
                      <option value={cod} key={title}>{title}</option>
                    ))}
                  </select>
                </div>
                <div className="user-pp__select">
                  <select name="orderBy">
                    <option value=''>Subcategoria</option>
                    {categories[selectedCategory]?.subcategories.map(({ title, cod }) => (
                      <option value={cod} key={title}>{title}</option>
                    ))}
                  </select>
                </div>

                <InputText
                  type="textarea"
                  useForm={form}
                  name="description"
                  labelText="Descripción"
                />
                <UserDetailList/>
              </div>
              <div className="user-pp__rating">
                <div className="user-pp__rating-title">
                  Calificaciones
                </div>
                <div className="user-pp__rating-stars">
                  {[0,1,2,3,4].map((_, index) => (
                    <AiFillStar key={index}/>
                  ))}
                </div>
                <span className="user-pp__rating-stars-title">
                  (2 Calificaciones)
                </span>
              </div>
              <div className="user-pp__form-actions">
                <Button>
                  Cancelar
                </Button>
                <Button
                  type="sumbit"
                  primary
                >
                  Guardar
                </Button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProductPreview
