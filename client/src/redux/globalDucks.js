import axios from "axios"
import { uploadImages } from '../utils/uploadImages'

// action types
const SET_NAVIGATION = 'SET_NAVIGATION'

const SET_BRANDS = 'SET_BRANDS'

const SET_BANNERS = 'SET_BANNERS'

const NEW_BANNER = 'NEW_BANNER'

const UPDATE_BANNERS = 'UPDATE_BANNERS'

// initialState
const initialState = {
  historyNav: [],
  brands: {},
  banners: [],
}


// reducer
export default (state = initialState, { type, payload}) => {
  switch (type) {
    case SET_NAVIGATION :
      return {
        ...state,
        historyNav: payload
      }
    case SET_BRANDS :
      return {
        ...state,
        brands: payload
      }
    case SET_BANNERS :
      return {
        ...state,
        banners: payload
      }
    case NEW_BANNER :
      return {
        ...state,
        banners: [...state.banners, payload]
      }
    case UPDATE_BANNERS :
      return {
        ...state,
        banners: payload
      }
    
    default:
      return state
  }
}

//actions

export const getBrands = () => async (dispatch, getState) => {

  const { category, subcategory } = getState().products

  try {
    const { data } = await axios.get(`/api/products?select=brand&category=${category}&subcategory=${subcategory}`)

    const brands = data.body.docs.reduce((acc, item) => {
      const brandTitle = item.brand.toLowerCase()
      acc[brandTitle] = acc[brandTitle] ? acc[brandTitle] + 1 : 1
      return acc
    },{})
    
    dispatch({
      type: 'SET_BRANDS',
      payload: brands,
    })
    
  } catch (error) {
    console.log(error)
  }
}

export const getBanners = () => (dispatch) => {
  axios.get('/api/ads/banners')
    .then(({ data }) => {
      dispatch({
        type: 'SET_BANNERS',
        payload: data.body,
      })
    })
}

export const createSlider = (file) => async (dispatch) => {
  console.log(file)
  const images = await uploadImages([file])

  console.log(images)

  axios.post('/api/ads/banners', images[0])
    .then(({ data }) => {
      dispatch({
        type: 'NEW_BANNER',
        payload: data.body,
      })
    })
}

export const deleteSlider = (bannerId) => (dispatch, getState) => {
  const { banners } = getState().global

  axios.delete(`/api/ads/banners/${bannerId}`)
    .then(({ data }) => {
      const bannersUpdated = banners.filter(banner => banner._id !== bannerId)
      dispatch({
        type: 'UPDATE_BANNERS',
        payload: bannersUpdated,
      })
    })
}

// export const setNavigation = (location) => (dispatch, getState) => {
//   const { selectedProduct } = getState().products

//   let historyNav 

//   if(location === 'products') {
//     historyNav = [selectedProduct.category, selectedProduct.subcategory]
//   }else {
//     historyNav = []
//   }

//   dispatch({
//     type: 'SET_NAVIGATION',
//     payload: historyNav,
//   })
// }
