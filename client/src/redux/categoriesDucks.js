import axios from 'axios'

// action types
const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
const GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR'
const GET_CATEGORIES_LOADING = 'GET_CATEGORIES_LOADING'

const NEW_CATEGORY_SUCCESS = 'NEW_CATEGORY_SUCCESS'
const NEW_CATEGORY_ERROR = 'NEW_CATEGORY_ERROR'
const NEW_CATEGORY_LOADING = 'NEW_CATEGORY_LOADING'

const DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS'
const DELETE_CATEGORY_ERROR = 'DELETE_CATEGORY_ERROR'
const DELETE_CATEGORY_LOADING = 'DELETE_CATEGORY_LOADING'

const NEW_SUBCATEGORY_SUCCESS = 'NEW_SUBCATEGORY_SUCCESS'
const NEW_SUBCATEGORY_ERROR = 'NEW_SUBCATEGORY_ERROR'
const NEW_SUBCATEGORY_LOADING = 'NEW_SUBCATEGORY_LOADING'

const DELETE_SUBCATEGORY_SUCCESS = 'DELETE_SUBCATEGORY_SUCCESS'
const DELETE_SUBCATEGORY_ERROR = 'DELETE_SUBCATEGORY_ERROR'
const DELETE_SUBCATEGORY_LOADING = 'DELETE_SUBCATEGORY_LOADING'

// initialState
const initialState = {
  categories: [],
  
  getCategoriesError: false,
  getCategoriesLoading: false,

  newCategoryError: false,
  newCategoryLoading: false,

  deleteCategoryError: false,
  deleteCategoryLoading: false,

  newSubcategoryError: false,
  newSubcategoryLoading: false,
  
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
    case NEW_CATEGORY_SUCCESS :
      return {
        ...state,
        categories: [...state.categories, payload],
        newCategoryLoading: false,
      }
    case NEW_CATEGORY_ERROR :
      return {
        ...state,
        newCategoryError: payload,
        newCategoryLoading: false,
      }
    case NEW_CATEGORY_LOADING :
      return {
        ...state,
        newCategoryLoading: true
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
    case NEW_SUBCATEGORY_SUCCESS :
      return {
        ...state,
        categories: state.categories.map((category, index) => {
          return index === payload.categoryIndex ? {...category, subcategories: [...category.subcategories, payload.subcategory]} : category
        }),
        newSubcategoryLoading: false,
      }
    case NEW_SUBCATEGORY_ERROR :
      return {
        ...state,
        newSubcategoryError: payload,
        newSubcategoryLoading: false,
      }
    case NEW_SUBCATEGORY_LOADING :
      return {
        ...state,
        newSubcategoryLoading: true,
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

export const newCategory = (title) => (dispatch) => {
  dispatch({
    type: 'NEW_CATEGORY_LOADING',
  })

  axios.post('/api/categories', { title: title })
    .then((response) => {
      console.log(response.data)
      if(!response.data.error){
        dispatch({
          type: 'NEW_CATEGORY_SUCCESS',
          payload: response.data.body,
        })
      }

      })
      .catch((error) => dispatch({
        type: 'NEW_CATEGORY_ERROR',
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

export const newSubcategory = (categoryIndex, title) => (dispatch, getState) => {
  dispatch({
    type: 'NEW_SUBCATEGORY_LOADING'
  })
  
  const selectedCategory = getState().categories.categories[categoryIndex]
  
  axios.post('/api/subcategories', { title: title, categoryId: selectedCategory._id })
    .then(response => {
      if(!response.data.error) {
        dispatch({
          type: 'NEW_SUBCATEGORY_SUCCESS',
          payload: { categoryIndex, subcategory: response.data.body }
        })
      }
    })
    .catch(error => dispatch({
      type: 'NEW_SUBCATEGORY_ERROR',
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
