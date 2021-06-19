import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import './UserProductPreview.scss'
import { AiFillStar, AiOutlineConsoleSql } from 'react-icons/ai'

import InputText from '../../InputText'
import ImageUserProducts, { ImageUserProductsNew } from '../ImageUserProducts'
import Button from '../../Button'
import UserDetailList from '../UserDetailList'

import imageDefault from '../../../assets/image-default.jpg'
import banner1 from '../../../assets/banner1.png'
import banner2 from '../../../assets/banner2.jpg'
import banner3 from '../../../assets/banner3.jpg'
import banner4 from '../../../assets/banner4.png'

import { createProduct, updateProduct } from '../../../redux/productsDucks'

const MAX_IMAGES = 5

const UserProductPreview = () => {
  const { handleSubmit, register, watch, formState: {errors}, reset , setValue} = useForm()
  const form = {register, watch, errors}

  const dispatch = useDispatch()
  const { categories } = useSelector(state => state.categories)
  const { onEdit } = useSelector(state => state.products)

  const [subcategoryList, setSubcategoryList] = useState([])
  const [imageSelected, setImageSelected] = useState('')
  const [specs, setSpecs] = useState([])
  
  const [newImages, setNewImages] = useState([])
  const [thumbs, setThumbs] = useState([])

  // const imagenes = [...thumbs.map(image => image.URL), ...newImages.map(file => file.URL)]

  useEffect(() => {
    if(categories) {
      // axios.get('/api/products/60c2b385d67c170a2a4198c6')
      //   .then(({ data: {body} }) => {
      //     const categoryFound = categories.find(category => category._id === body.category)
      //     setSubcategoryList(categoryFound?.subcategories)
      //     reset(body)
      //     setSpecs(body.specs)
      //     setThumbs(body.images)
      //     setValue('category', body.category)
      //     setValue('subcategory', body.subcategory)
      //   })
    }
  }, [categories])

  const onSubmit = (data) => {
    // console.log(data, specs)
    if(onEdit) {
      dispatch(updateProduct('60c2b385d67c170a2a4198c6', thumbs, newImages.map(({file}) => file), {...data, specs: specs}))
    }else {
      dispatch(createProduct(newImages.map(({file}) => file), {...data, specs: specs}))
    }
    reset({})
    setSpecs([])
    setThumbs([])
    newImages.forEach(({ file }) => URL.revokeObjectURL(file))
    setNewImages([])
    setImageSelected('')
  }

  const handleSelectChange = (event) => {
    const categoryFound = categories.find(category => category._id === event.target.value)
    categoryFound ? setSubcategoryList(categoryFound.subcategories) : setSubcategoryList([])
  }

  const handleInputThumbChange = event => {
    if (!event.target.files[0]) return;

    const urlCreated = URL.createObjectURL(event.target.files[0])

    setImageSelected(urlCreated)

    setNewImages([...newImages, {
      file: event.target.files[0],
      URL: urlCreated
    }])
  }

  const handleDeleteImage = (imageURL) => () => {
    setThumbs(thumbs.filter(image => image.URL !== imageURL))
    setNewImages(newImages.filter(file => {
      if(file.URL !== imageURL) return true
      setImageSelected('')
      URL.revokeObjectURL(imageURL)
      return;
    }))
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
                  <img src={imageSelected || imageDefault} alt=""/>
                </div>

              </div>

              <div className="user-pp__image-thumbs">
                {(newImages.length + thumbs.length) < MAX_IMAGES &&
                  <div className="user-pp__image-thumbs-item">
                    <ImageUserProductsNew
                      onChange={handleInputThumbChange}
                      name="image"
                    />
                  </div>
                }
                {[...thumbs.map(image => image.URL), ...newImages.map(file => file.URL)].map((URL, index) => (
                  <div className="user-pp__image-thumbs-item" key={index}>
                    <ImageUserProducts 
                      src={URL}
                      onClick={() => setImageSelected(URL)}
                      onClickDelete={handleDeleteImage(URL, index)}
                    />
                  </div>
                ))}
              </div>

            </div>

            <form 
              className="user-pp__form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="user-pp__form-fields">
                <InputText
                  className="input-title"
                  useForm={form}
                  name="title"
                  labelText="Titulo"
                  required
                />
                <InputText
                  className="input-brand"
                  useForm={form}
                  name="brand"
                  labelText="Marca"
                  required
                />
                <InputText
                  className="input-sku"
                  useForm={form}
                  name="sku"
                  labelText="SKU"
                />
                <InputText
                  className="input-price"
                  useForm={form}
                  name="price"
                  labelText="Precio"
                  required
                  />
                <InputText
                  className="input-discount"
                  useForm={form}
                  name="discount"
                  labelText="Descuento"
                />
                <InputText
                  className="input-stock"
                  useForm={form}
                  name="stock"
                  labelText="Stock"
                  required
                />

                <div className="user-pp__select">
                  <select 
                    {...register('category', { required: true })}
                    onChange={handleSelectChange}
                    >
                    <option value=''>Categoria</option>
                    {categories.map(({ title, _id }) => (
                      <option 
                      value={_id} 
                      key={_id}
                      >
                        {title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="user-pp__select">
                  <select 
                    {...register('subcategory', { required: true })}
                    >
                    <option value=''>Subcategoria</option>
                    {subcategoryList?.map(({ title, _id }) => (
                      <option 
                      value={_id} 
                      key={_id}
                      >
                        {title}
                      </option>
                    ))}
                  </select>
                </div>

                <InputText
                  className="input-description"
                  type="textarea"
                  useForm={form}
                  name="description"
                  labelText="Descripción"
                />

                <UserDetailList 
                  className="box-details"
                  specs={specs} 
                  setSpecs={setSpecs}
                />

                <InputText
                  className="input-exposurePer"
                  useForm={form}
                  name="exposurePer"
                  labelText="Exposición (1 - 10)"
                  required
                />

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
                <Button
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
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
