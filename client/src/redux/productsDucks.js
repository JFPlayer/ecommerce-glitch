import axios from "axios";

import { uploadImages } from "../utils/uploadImages";

// action types
const SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT";

const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS";
const CREATE_PRODUCT_ERROR = "CREATE_PRODUCT_ERROR";
const CREATE_PRODUCT_LOADING = "CREATE_PRODUCT_LOADING";

const GET_PRODUCTS = "GET_PRODUCTS";

const SET_TOTAL_PAGES_PRODUCTS = "SET_TOTAL_PAGES_PRODUCTS";

const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

const SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY";
const SET_CURRENT_SUBCATEGORY = "SET_CURRENT_SUBCATEGORY";

const SET_PAGE = "SET_PAGE";

const SET_ORDER = "SET_ORDER";

const SET_FILTER_BRANDS = "SET_FILTER_BRANDS";

const SET_PRODUCTS_HOTSALE = "SET_PRODUCTS_HOTSALE";

const SET_PRODUCTS_BESTSELLER = "SET_PRODUCTS_BESTSELLER";

const SET_PRODUCTS_SUGGESTED = "SET_PRODUCTS_SUGGESTED";

// initialState
const initialState = {
  products: [],
  productsHotSale: [],
  productsBestSeller: [],
  productsSuggested: [],
  selectedProduct: {},
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
  // filterByBrand: ['asus', 'sony'],
};

// reducer
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: payload,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case SET_PRODUCTS_HOTSALE:
      return {
        ...state,
        productsHotSale: payload,
      };
    case SET_PRODUCTS_BESTSELLER:
      return {
        ...state,
        productsBestSeller: payload,
      };
    case SET_PRODUCTS_SUGGESTED:
      return {
        ...state,
        productsSuggested: payload,
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
    // case CREATE_PRODUCT_SUCCESS :
    //   return {
    //     ...state,
    //     products: [...state.products, payload]
    //   }
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

  const { categories } = getState().categories

  let sort = "";
  if (orderBy !== "sequence") sort = orderBy;

  const brands = filterByBrand.map((brand) => `brand=${brand}`).join("&");

  const url = `/api/products?limit=${limit}&page=${page}&sort=${sort}&populate=${populate}&paginate=${paginate}&category=${category}&subcategory=${subcategory}&${brands}`;

  axios.get(url).then(({ data }) => {
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
  });
};

export const getProductById = (productId) => (dispatch) => {
  
  
  axios
    .get(`/api/products/${productId}`)
    .then(({ data }) => {
      dispatch(setSelectedProduct(data.body));
      // modificamos el estado de 'globalDucks'
    })
    .catch((error) => console.log(error));
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

export const createProduct = (arrayFiles = [], data) => async (dispatch) => {
  const images = await uploadImages(arrayFiles);

  axios.post("/api/products", { ...data, images })
    .then((response) => {
      dispatch({
        type: "CREATE_PRODUCT_SUCCESS",
        payload: response.data.body,
      });
      console.log(response.data.body);
    })
    .catch((error) => console.log(error));
};

export const updateProduct = (
  productId,
  currentImages = [],
  arrayFiles = [],
  data
) => async (dispatch) => {
  const images = await uploadImages(arrayFiles);

  const fields = [
    "sku",
    "title",
    "brand",
    "category",
    "subcategory",
    "stock",
    "price",
    "discount",
    "rating",
    "description",
    "specs",
    "exposurePer"
  ];

  const dataForUpdate = {};

  fields.forEach((key) => {
    if (data[key]) {
      dataForUpdate[key] = data[key];
    }
  });

  axios
    .put(`/api/products/${productId}`, {
      ...data,
      images: [...images, ...currentImages],
    })
    .then((response) => {
      console.log("response");
      console.log(response);
    });
};

export const getProductsHotSale = () => (dispatch) => {
  
  axios.get('/api/products?limit=10&paginate=true&populate=true&discount=desc')
    .then(({ data }) => {
      dispatch({
        type: 'SET_PRODUCTS_HOTSALE',
        payload: data.body.docs
      })
    })
  }
  
  export const getProductsBestSeller = () => (dispatch) => {
    
  axios.get('/api/products?limit=10&paginate=true&populate=true&salesQuantity=desc')
    .then(({ data }) => {
      dispatch({
        type: 'SET_PRODUCTS_BESTSELLER',
        payload: data.body.docs
      })
    })
  }
  
  export const getProductsSuggested = () => (dispatch) => {
    
  axios.get('/api/products?limit=10&paginate=true&populate=true&exposurePer=desc')
    .then(({ data }) => {
      dispatch({
        type: 'SET_PRODUCTS_SUGGESTED',
        payload: data.body.docs
      })
    })
  }