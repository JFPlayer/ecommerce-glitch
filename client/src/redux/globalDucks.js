import axios from "axios"
import { uploadImages } from '../utils/uploadImages'

// action types
const SET_NAVIGATION = 'SET_NAVIGATION'

const SET_BRANDS = 'SET_BRANDS'
const SET_BRANDS_ERROR = 'SET_BRANDS_ERROR'

const SET_BANNERS = 'SET_BANNERS'
const GET_BANNERS_ERROR = 'GET_BANNERS_ERROR'
const GET_BANNERS_LOADING = 'GET_BANNERS_LOADING'

const NEW_BANNER = 'NEW_BANNER'

const UPDATE_BANNERS = 'UPDATE_BANNERS'

const SET_SLIDEOUT = 'SET_SLIDEOUT'

// initialState
const initialState = {
  historyNav: [],
  brands: {},
  setBrandsError: null,
  banners: [],
  getBannersError: null,
  getBannersLoading: false,
  slideOutOpen: '',
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
    case SET_BRANDS_ERROR :
      return {
        ...state,
        setBrandsError: payload
      }
    case SET_BANNERS :
      return {
        ...state,
        banners: payload,
        getBannersLoading: false,
      }
    case GET_BANNERS_ERROR :
      return {
        ...state,
        getBannersError: payload,
        getBannersLoading: false,
      }
    case GET_BANNERS_LOADING :
      return {
        ...state,
        getBannersLoading: true,
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
    case SET_SLIDEOUT :
      return {
        ...state,
        slideOutOpen: payload
      }
    
    default:
      return state
  }
}

//actions
export const setSlideOutOpen = (slideOutName) => {
  return {
    type: 'SET_SLIDEOUT',
    payload: slideOutName
  }
}

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
    dispatch({
      type: 'SET_BRANDS_ERROR',
      payload: error,
    })
  }
}

export const getBanners = () => (dispatch) => {
  dispatch({
    type: 'GET_BANNERS_LOADING',
  })

  axios.get('/api/ads/banners')
    .then(({ data }) => {
      dispatch({
        type: 'SET_BANNERS',
        payload: data.body,
      })
    })
    .catch(error => {
      dispatch({
        type: 'SET_BANNERS_ERROR',
        payload: error
      })
    })
}

export const createSlider = (file) => async (dispatch) => {
  const images = await uploadImages([file])

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
