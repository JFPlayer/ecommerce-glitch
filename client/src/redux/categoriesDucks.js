import axios from 'axios'

import { uploadImages } from '../utils/uploadImages'

// action types
const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
const GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR'
const GET_CATEGORIES_LOADING = 'GET_CATEGORIES_LOADING'

const CREATE_CATEGORY_SUCCESS = 'CREATE_CATEGORY_SUCCESS'
const CREATE_CATEGORY_ERROR = 'CREATE_CATEGORY_ERROR'
const CREATE_CATEGORY_LOADING = 'CREATE_CATEGORY_LOADING'

const DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS'
const DELETE_CATEGORY_ERROR = 'DELETE_CATEGORY_ERROR'
const DELETE_CATEGORY_LOADING = 'DELETE_CATEGORY_LOADING'

const CREATE_SUBCATEGORY_SUCCESS = 'CREATE_SUBCATEGORY_SUCCESS'
const CREATE_SUBCATEGORY_ERROR = 'CREATE_SUBCATEGORY_ERROR'
const CREATE_SUBCATEGORY_LOADING = 'CREATE_SUBCATEGORY_LOADING'

const DELETE_SUBCATEGORY_SUCCESS = 'DELETE_SUBCATEGORY_SUCCESS'
const DELETE_SUBCATEGORY_ERROR = 'DELETE_SUBCATEGORY_ERROR'
const DELETE_SUBCATEGORY_LOADING = 'DELETE_SUBCATEGORY_LOADING'

const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES'

// initialState
const initialState = {
  categories: [],
  
  getCategoriesError: false,
  getCategoriesLoading: false,

  createCategoryError: false,
  createCategoryLoading: false,

  deleteCategoryError: false,
  deleteCategoryLoading: false,

  createSubcategoryError: false,
  createSubcategoryLoading: false,
  
  deleteSubcategoryError: false,
  deleteSubcategoryLoading: false,

  error: false,
  loading: false,
}


// reducer
export default (state = initialState, { type, payload}) => {
  switch (type) {
    case GET_CATEGORIES_SUCCESS :
      return {
        ...state,
        categories: payload,
        getCategoriesLoading: false,
      }
    case GET_CATEGORIES_ERROR :
      return {
        ...state,
        getCategoriesError: payload,
        getCategoriesLoading: false,
      }
    case GET_CATEGORIES_LOADING :
      return {
        ...state,
        getCategoriesLoading: true
      }
    case CREATE_CATEGORY_SUCCESS :
      return {
        ...state,
        categories: [...state.categories, payload],
        createCategoryLoading: false,
      }
    case CREATE_CATEGORY_ERROR :
      return {
        ...state,
        createCategoryError: payload,
        createCategoryLoading: false,
      }
    case CREATE_CATEGORY_LOADING :
      return {
        ...state,
        createCategoryLoading: true
      }
    case DELETE_CATEGORY_SUCCESS :
      return {
        ...state,
        categories: [...state.categories.slice(0, payload), ...state.categories.slice(payload + 1)],
        deleteCategoryLoading: false,
      }
    case DELETE_CATEGORY_ERROR :
      return {
        ...state,
        deleteCategoryError: payload,
        deleteCategoryLoading: false,
      }
    case DELETE_CATEGORY_LOADING :
      return {
        ...state,
        deleteCategoryLoading: true,
      }
    case CREATE_SUBCATEGORY_SUCCESS :
      return {
        ...state,
        categories: state.categories.map((category, index) => {
          return index === payload.categoryIndex ? {...category, subcategories: [...category.subcategories, payload.subcategory]} : category
        }),
        createSubcategoryLoading: false,
      }
    case CREATE_SUBCATEGORY_ERROR :
      return {
        ...state,
        createSubcategoryError: payload,
        createSubcategoryLoading: false,
      }
    case CREATE_SUBCATEGORY_LOADING :
      return {
        ...state,
        createSubcategoryLoading: true,
      }
    case DELETE_SUBCATEGORY_SUCCESS :
      return {
        ...state,
        categories: state.categories.map((category, index) => {
          return index === payload.categoryIndex ? 
            { ...category, subcategories: [...category.subcategories.slice(0, payload.subcategoryIndex), ...category.subcategories.slice(payload.subcategoryIndex + 1)] } 
            : 
            category
        }),
        deleteSubcategoryLoading: false,
      }
    case DELETE_SUBCATEGORY_ERROR :
      return {
        ...state,
        deleteSubcategoryError: payload,
        deleteSubcategoryLoading: false,
      }
    case DELETE_SUBCATEGORY_LOADING :
      return {
        ...state,
        deleteSubcategoryLoading: true,
      }
    case UPDATE_CATEGORIES :
      return {
        ...state,
        categories: payload,
      }

    default:
      return state
  }
}

//actions
export const getCategories = () => (dispatch) => {
  dispatch({
    type: 'GET_CATEGORIES_LOADING'
  })
  
  axios.get('/api/categories')
    .then(response => {
      dispatch({
          type: 'GET_CATEGORIES_SUCCESS',
          payload: response.data.body,
        })
      })
      .catch((error) => dispatch({
        type: 'GET_CATEGORIES_ERROR',
        payload: error
      }))
}

export const createCategory = (title) => (dispatch) => {
  dispatch({
    type: 'CREATE_CATEGORY_LOADING',
  })

  axios.post('/api/categories', { title: title })
    .then((response) => {
      console.log(response.data)
      if(!response.data.error){
        dispatch({
          type: 'CREATE_CATEGORY_SUCCESS',
          payload: response.data.body,
        })
      }

      })
      .catch((error) => dispatch({
        type: 'CREATE_CATEGORY_ERROR',
        payload: error,
      }))
}

export const deleteCategory = (categoryIndex, categoryId) => (dispatch) => {
  dispatch({
    type: 'DELETE_CATEGORY_LOADING',
  })

  axios.delete(`/api/categories/${categoryId}`)
    .then(response => {
      if(!response.data.error) {
        dispatch({
          type: "DELETE_CATEGORY_SUCCESS",
          payload: categoryIndex,
        })
      }
    })
    .catch(error => dispatch({
      type: 'DELETE_CATEGORY_ERROR',
      payload: error,
    }))
}

export const createSubcategory = (categoryIndex, title) => (dispatch, getState) => {
  dispatch({
    type: 'CREATE_SUBCATEGORY_LOADING'
  })
  
  const selectedCategory = getState().categories.categories[categoryIndex]
  
  axios.post('/api/subcategories', { title: title, categoryId: selectedCategory._id })
    .then(response => {
      if(!response.data.error) {
        dispatch({
          type: 'CREATE_SUBCATEGORY_SUCCESS',
          payload: { categoryIndex, subcategory: response.data.body }
        })
      }
    })
    .catch(error => dispatch({
      type: 'CREATE_SUBCATEGORY_ERROR',
      payload: error,
    }))
}

export const deleteSubcategory = (categoryIndex, subcategoryIndex, subcategoryId) => (dispatch) => {
  dispatch({
    type: 'DELETE_SUBCATEGORY_LOADING'
  })

  axios.delete(`/api/subcategories/${subcategoryId}`)
    .then(response => {
      if(!response.data.error) {
        dispatch({
          type: 'DELETE_SUBCATEGORY_SUCCESS',
          payload: { categoryIndex, subcategoryIndex }
        })
      }
    })
    .catch(error => dispatch({
      type: 'DELETE_SUBCATEGORY_ERROR',
      payload: error
    }))  
}

export const createBanner = (file, categoryId) => async (dispatch, getState) => {
  const { categories } = getState().categories
  
  const images = await uploadImages([file])

  axios.put(`/api/categories/${categoryId}`, { image: images[0] })
    .then(({data}) => {
      const updatedCategories = categories.map(category => {
        if(category._id !== categoryId) return category
        return data.body
      })
      dispatch({
        type: 'UPDATE_CATEGORIES',
        payload: updatedCategories
      })
    })
  }
  
  export const deleteBanner = (categoryId) => (dispatch, getState) => {
    const { categories } = getState().categories

    axios.put(`/api/categories/${categoryId}`, { image: null })
    .then(({ data }) => {
      const updatedCategories = categories.map(category => {
        if(category._id !== categoryId) return category
        return {
          ...category,
          image: null
        }
      })
      dispatch({
        type: 'UPDATE_CATEGORIES',
        payload: updatedCategories
      })
    })
}
