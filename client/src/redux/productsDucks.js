import axios from "axios";

import { uploadImages } from "../utils/uploadImages";

// action types
const SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT";
const GET_PRODUCT_ERROR = "GET_PRODUCT_ERROR";

const SET_EDIT = "SET_EDIT";

const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS";
const CREATE_PRODUCT_ERROR = "CREATE_PRODUCT_ERROR";
const CREATE_PRODUCT_LOADING = "CREATE_PRODUCT_LOADING";

const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
const UPDATE_PRODUCT_ERROR = "UPDATE_PRODUCT_ERROR";
const UPDATE_PRODUCT_LOADING = "UPDATE_PRODUCT_LOADING";

const GET_PRODUCTS = "GET_PRODUCTS";
const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";

const SET_TOTAL_PAGES_PRODUCTS = "SET_TOTAL_PAGES_PRODUCTS";

const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

const SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY";
const SET_CURRENT_SUBCATEGORY = "SET_CURRENT_SUBCATEGORY";

const SET_PAGE = "SET_PAGE";

const SET_ORDER = "SET_ORDER";

const SET_FILTER_BRANDS = "SET_FILTER_BRANDS";

const SET_PRODUCTS_HOTSALE = "SET_PRODUCTS_HOTSALE";
const GET_PRODUCTS_HOTSALE_ERROR = "GET_PRODUCTS_HOTSALE_ERROR";
const GET_PRODUCTS_HOTSALE_LOADING = "GET_PRODUCTS_HOTSALE_LOADING";

const SET_PRODUCTS_BESTSELLER = "SET_PRODUCTS_BESTSELLER";
const GET_PRODUCTS_BESTSELLER_LOADING = "GET_PRODUCTS_BESTSELLER_LOADING";
const GET_PRODUCTS_BESTSELLER_ERROR = "GET_PRODUCTS_BESTSELLER_ERROR";

const SET_PRODUCTS_SUGGESTED = "SET_PRODUCTS_SUGGESTED";
const GET_PRODUCTS_SUGGESTED_LOADING = "GET_PRODUCTS_SUGGESTED_LOADING";
const GET_PRODUCTS_SUGGESTED_ERROR = "GET_PRODUCTS_SUGGESTED_ERROR";

// initialState
const initialState = {
  products: [],
  getProductsError: null,

  createdProducts: [],
  createProductLoading: false,
  createProductError: null,

  updatedProducts: [],
  updateProductLoading: false,
  updateProductError: null,

  productsHotSale: [],
  getProductsHotSaleError: null,
  getProductsHotSaleLoading: false,
  
  productsBestSeller: [],
  getProductsBestSellerError: null,
  getProductsBestSellerLoading: false,
  
  productsSuggested: [],
  getProductsSuggestedError: null,
  getProductsSuggestedLoading: false,

  selectedProduct: {},
  getProductError: null,

  onEdit: false,

  totalProducts: 0,
  totalPages: 0,
  limit: 5,
  page: 1,
  populate: true,
  paginate: true,
  orderBy: "sequence",
  category: "",
  subcategory: "",
  filterByBrand: [],
};

// reducer
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: payload,
      };
    case GET_PRODUCT_ERROR:
      return {
        ...state,
        getProductError: payload,
      };
    case SET_EDIT:
      return {
        ...state,
        onEdit: payload,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        getProductsError: payload,
      };
    case SET_PRODUCTS_HOTSALE:
      return {
        ...state,
        productsHotSale: payload,
        getProductsHotSaleLoading: false,
      };
    case GET_PRODUCTS_HOTSALE_ERROR:
      return {
        ...state,
        getProductsHotSaleError: payload,
        getProductsHotSaleLoading: false,
      };
    case GET_PRODUCTS_HOTSALE_LOADING:
      return {
        ...state,
        getProductsHotSaleLoading: true,
      };
    case SET_PRODUCTS_BESTSELLER:
      return {
        ...state,
        productsBestSeller: payload,
        getProductsBestSellerLoading: false
      };
    case GET_PRODUCTS_BESTSELLER_ERROR:
      return {
        ...state,
        getProductsBestSellerError: payload,
        getProductsBestSellerLoading: false
      };
    case GET_PRODUCTS_BESTSELLER_LOADING:
      return {
        ...state,
        getProductsBestSellerLoading: true
      };
    case SET_PRODUCTS_SUGGESTED:
      return {
        ...state,
        productsSuggested: payload,
        getProductsSuggestedLoading: false
      };
    case GET_PRODUCTS_SUGGESTED_ERROR:
      return {
        ...state,
        getProductsSuggestedError: payload,
        getProductsSuggestedLoading: false
      };
    case GET_PRODUCTS_SUGGESTED_LOADING:
      return {
        ...state,
        getProductsSuggestedLoading: true
      };
    case SET_TOTAL_PAGES_PRODUCTS:
      return {
        ...state,
        totalPages: payload.totalPages,
        totalProducts: payload.totalProducts,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        page: payload,
      };
    case SET_CURRENT_CATEGORY:
      return {
        ...state,
        category: payload,
        subcategory: "",
      };
    case SET_CURRENT_SUBCATEGORY:
      return {
        ...state,
        category: "",
        subcategory: payload,
      };
    case SET_FILTER_BRANDS:
      return {
        ...state,
        filterByBrand: [...payload, ""],
      };
    case CREATE_PRODUCT_SUCCESS :
      return {
        ...state,
        createdProducts: [...state.createdProducts, payload],
        createProductLoading: false,
      }
    case CREATE_PRODUCT_ERROR :
      return {
        ...state,
        createProductError: payload,
        createProductLoading: false,
      }
    case CREATE_PRODUCT_LOADING :
      return {
        ...state,
        createProductLoading: true
      }
    case UPDATE_PRODUCT_SUCCESS :
      return {
        ...state,
        updatedProducts: [...state.updatedProducts, payload],
        updateProductLoading: false,
      }
    case UPDATE_PRODUCT_ERROR :
      return {
        ...state,
        updateProductError: payload,
        updateProductLoading: false,
      }
    case UPDATE_PRODUCT_LOADING :
      return {
        ...state,
        updateProductLoading: true
      }
    case SET_PAGE:
      return {
        ...state,
        page: payload,
      };
    case SET_ORDER:
      return {
        ...state,
        orderBy: payload,
      };
    default:
      return state;
  }
};

//actions
export const setEditState = (onEdit) => {
  return {
    type:'SET_EDIT',
    payload: onEdit
  }
}

export const setSelectedProduct = (product) => (dispatch) => {
  dispatch({
    type: "SET_NAVIGATION",
    payload: [product.category, product.subcategory],
  });
  dispatch({
    type: "SET_SELECTED_PRODUCT",
    payload: product,
  });
};

export const setCategory = (categoryId) => {
  return {
    type: "SET_CURRENT_CATEGORY",
    payload: categoryId,
  };
};

export const setSubcategory = (subcategoryId) => {
  return {
    type: "SET_CURRENT_SUBCATEGORY",
    payload: subcategoryId,
  };
};

export const getProductsCatalog = () => (dispatch, getState) => {
  const {
    orderBy,
    filterByBrand,
    limit,
    page,
    populate,
    paginate,
    category,
    subcategory,
  } = getState().products;

  let sort = "";
  if (orderBy !== "sequence") sort = orderBy;

  const brands = filterByBrand.map((brand) => `brand=${brand}`).join("&");

  const url = `/api/products?limit=${limit}&page=${page}&sort=${sort}&populate=${populate}&paginate=${paginate}&category=${category}&subcategory=${subcategory}&${brands}`;

  axios.get(url)
  .then(({ data }) => {
    dispatch({
      type: "GET_PRODUCTS",
      payload: data.body.docs,
    });
    dispatch({
      type: "SET_TOTAL_PAGES_PRODUCTS",
      payload: {
        totalPages: data.body.totalPages,
        totalProducts: data.body.totalDocs,
      },
    });
    if(data.body.docs.length) {
      dispatch({
        type: "SET_NAVIGATION",
        payload: [data.body.docs[0].category],
      });
    }else {
      dispatch({
        type: "SET_NAVIGATION",
        payload: [],
      });
    }
  })
  .catch(error => {
    dispatch({
      type: 'GET_PRODUCTS_ERROR',
      payload: error
    })
  })
};

export const getProductById = (productId) => (dispatch) => {
  
  axios
    .get(`/api/products/${productId}`)
    .then(({ data }) => {
      dispatch(setSelectedProduct(data.body));
    })
    .catch((error) => {
      dispatch({
        type: 'GET_PRODUCT_ERROR',
        payload: error
      })
    });
};

export const createProduct = (arrayFiles = [], data) => async (dispatch) => {
  dispatch({
    type: 'CREATE_PRODUCT_LOADING',
  })
  const images = await uploadImages(arrayFiles);

  axios.post("/api/products", { ...data, images })
    .then(({ data }) => {
      dispatch({
        type: "CREATE_PRODUCT_SUCCESS",
        payload: data.body._id,
      });
    })
    .catch((error) => {
      dispatch({
        type: 'CREATE_PRODUCT_ERROR',
        payload: error
      })
    });
};

export const updateProduct = (
  productId,
  currentImages = [],
  newImages = [],
  data
) => async (dispatch) => {
  dispatch({
    type: 'UPDATE_PRODUCT_LOADING',
  })
  const images = await uploadImages(newImages);

  axios.put(`/api/products/${productId}`, {...data, images: [...images, ...currentImages],})
    .then(({ data }) => {
      dispatch({
        type: 'UPDATE_PRODUCT_SUCCESS',
        payload: data.body._id
      })
    })
    .catch(error => {
      dispatch({
        type: 'UPDATE_PRODUCT_ERROR',
        payload: error
      })
    })
};

export const getProductsHotSale = () => (dispatch) => {
  dispatch({
    type: 'GET_PRODUCTS_HOTSALE_LOADING',
  })
  
  axios.get('/api/products?limit=10&paginate=true&populate=true&discount=desc')
    .then(({ data }) => {
      dispatch({
        type: 'SET_PRODUCTS_HOTSALE',
        payload: data.body.docs
      })
    })
    .catch(error => {
      dispatch({
        type: 'GET_PRODUCTS_HOTSALE_ERROR',
        payload: error
      })
    })
  }
  
export const getProductsBestSeller = () => (dispatch) => {
  dispatch({
    type: 'GET_PRODUCTS_BESTSELLER_LOADING',
  })
    
  axios.get('/api/products?limit=10&paginate=true&populate=true&salesQuantity=desc')
    .then(({ data }) => {
      dispatch({
        type: 'SET_PRODUCTS_BESTSELLER',
        payload: data.body.docs
      })
    })
    .catch(error => {
      dispatch({
        type: 'GET_PRODUCTS_BESTSELLER_ERROR',
        payload: error
      })
    })
  }
  
export const getProductsSuggested = () => (dispatch) => {
  dispatch({
    type:'GET_PRODUCTS_SUGGESTED_LOADING',
  })
    
  axios.get('/api/products?limit=10&paginate=true&populate=true&exposurePer=desc')
    .then(({ data }) => {
      dispatch({
        type: 'SET_PRODUCTS_SUGGESTED',
        payload: data.body.docs
      })
    })
    .catch(error => {
      dispatch({
        type:'GET_PRODUCTS_SUGGESTED_ERROR',
        payload: error
      })
    })
  }