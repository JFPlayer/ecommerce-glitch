import axios from "axios"

// action types
const SET_USER = 'SET_USER'
const SIGN_OUT = 'SIGN_OUT'
const SET_TOKEN = 'SET_TOKEN'
const SET_INTERVAL = 'SET_INTERVAL'
const SET_INTERCEPTOR = 'SET_INTERCEPTOR'
const SET_CART = 'SET_CART'
const SET_CART_LOADING = 'SET_CART_LOADING'
const UPDATE_CART = 'UPDATE_CART'
const SET_WISH_LIST = 'SET_WISH_LIST'
const SET_WISH_LIST_LOADING = 'SET_WISH_LIST_LOADING'
const UPDATE_WISH_LIST = 'UPDATE_WISH_LIST'
const SET_BILL = 'SET_BILL'
const SET_PURCHASE_PROCESS_STEP = 'SET_PURCHASE_PROCESS_STEP'
const UPDATE_PERFIL = 'UPDATE_PERFIL'
const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
const SET_PURCHASE_PERFIL = 'SET_PURCHASE_PERFIL'
const SET_PURCHASE_ADDRESS = 'SET_PURCHASE_ADDRESS'
const SET_PURCHASE_PAY = 'SET_PURCHASE_PAY'

// initialState
const initialState = {
  userFirstName: '',
  userLastName: '',
  userEmail: '',
  userDNI: '',
  userPhone: '',
  userStreet: '',
  userDpto: '',
  userProvince: '',
  userCity: '',
  userZipCode: '',
  userNum: '',
  userId: '',
  userRole: 'user',
  loggedIn: false,
  accessToken: '',
  intervalId: '',
  interceptorAxios: '',
  cart: [],
  cartUpdateLoading: false,
  wishList: [],
  wishListUpdateLoading: false,
  subTotal: 0,
  discount: 0,
  total: 0,
  purchaseProcessStep : 0,
  purchasePerfil: {},
  purchaseAddress: {},
  purchasePay: '',
}


// reducer
export default (state = initialState, { type, payload}) => {
  switch (type) {
    case SET_USER :
      return {
        ...state,
        userFirstName: payload.firstName,
        userLastName: payload.lastName,
        userEmail: payload.email,
        userDNI: payload.DNI || '',
        userPhone: payload.phone || '',
        userStreet: payload.address?.street || '',
        userDpto: payload.address?.dpto || '',
        userProvince: payload.address?.province || '',
        userCity: payload.address?.city || '',
        userZipCode: payload.address?.zipCode || '',
        userNum: payload.address?.num || '',
        userId: payload._id,
        userRole: payload.role,
        loggedIn: true,
        accessToken: payload.accessToken
      }
    case SIGN_OUT :
      return {
        ...initialState,
        intervalId : state.intervalId,
        interceptorAxios : state.interceptorAxios,
      }
    case SET_TOKEN :
      return {
        ...state,
        accessToken: payload,
      }
    case SET_INTERVAL :
      return {
        ...state,
        intervalId: payload,
      }
    case SET_INTERCEPTOR :
      return {
        ...state,
        interceptorAxios: payload,
      }
    case SET_CART :
      return {
        ...state,
        cart: payload || [],
      }
    case SET_CART_LOADING :
      return {
        ...state,
        cartUpdateLoading: payload,
      }
    case UPDATE_CART :
      return {
        ...state,
        cart: [...state.cart, ...payload],
      }
    case SET_WISH_LIST :
      return {
        ...state,
        wishList: payload || [],
      }
    case SET_WISH_LIST_LOADING :
      return {
        ...state,
        wishListUpdateLoading: payload,
      }
    case UPDATE_WISH_LIST :
      return {
        ...state,
        wishList: [...state.wishList, payload],
      }
    case SET_BILL :
      return {
        ...state,
        subTotal: payload.subTotal,
        discount: payload.discount,
        total: payload.total,
      }
    case SET_PURCHASE_PROCESS_STEP :
      return {
        ...state,
        purchaseProcessStep: payload,
      }
    case UPDATE_PERFIL :
      return {
        ...state,
        userFirstName: payload.firstName,
        userLastName: payload.lastName,
        userDNI: payload.DNI,
        userPhone: payload.phone,
      }
    case UPDATE_ADDRESS :
      return {
        ...state,
        userStreet: payload.street,
        userDpto: payload.dpto,
        userProvince: payload.province,
        userCity: payload.city,
        userZipCode: payload.zipCode,
        userNum: payload.num,
      }
    case SET_PURCHASE_PERFIL :
      return {
        ...state,
        purchasePerfil: payload
      }
    case SET_PURCHASE_ADDRESS :
      return {
        ...state,
        purchaseAddress: payload
      }
    case SET_PURCHASE_PAY :
      return {
        ...state,
        purchasePay: payload
      }
    
    default:
      return state
  }
}

//actions
export const calculateBill = () => (dispatch, getState) => {
  const { cart } = getState().user

  const [ subTotal, discount ] = cart.reduce((acc, { quantity, productId }) => {
    acc[0] = acc[0] + productId.price * quantity
    if(productId.discount) acc[1] = acc[1] + ((productId.discount / 100) * productId.price) * quantity
    return acc
  }, [0,0])
  
  dispatch({
    type: 'SET_BILL',
    payload: { subTotal, discount, total: subTotal - discount }
  })
}

export const updateWishListCart = (productsWishList, productsIdCart) => (dispatch, getState) => {
  // console.log(productsWishList, productsIdCart)
  dispatch({
    type: 'SET_CART_LOADING',
    payload: true
  })
  dispatch({
    type: 'SET_WISH_LIST_LOADING',
    payload: true
  })
  
  const { cart } = getState().user
  
  const productsCard = cart.map(product => {
    if(productsIdCart.includes(product.productId._id)) {
      productsIdCart = productsIdCart.filter(productId => productId !== product.productId._id)
    }
    return {
      quantity: product.quantity,
      productId: product.productId._id
    }
  })
  
  const updatedProductsCart = productsIdCart.map(productId => {
    return {
      quantity: 1,
      productId,
    }
  })
  
  axios.put('/api/users', { wishList: productsWishList, cart: [...productsCard, ...updatedProductsCart] })
  .then(({ data }) => {
    dispatch(setCart(data.body.cart.products))
    dispatch(setWishList(data.body.wishList.productId))
    dispatch({
      type: 'SET_CART_LOADING',
      payload: false
    })
    dispatch({
      type: 'SET_WISH_LIST_LOADING',
      payload: false
    })
  })
}

export const addProductCart = (newProductId) => (dispatch, getState) => {
  const { cart } = getState().user

  const newProduct = [{
    quantity: 1,
    productId: newProductId
  }]

  const updatedProductsCart = cart.map(({ quantity, productId }) => {
    if(productId._id === newProductId) { // producto repetido
      newProduct.shift() // no se agrega
      return { // incrementamos en 1 la cantidad
        quantity: quantity + 1,
        productId: productId._id
      }
    }
    return {
      quantity,
      productId: productId._id
    }
  })

  axios.put('/api/users', { cart: [...updatedProductsCart, ...newProduct] })
    .then(({ data }) => {
      dispatch(setCart(data.body.cart.products))
    })
}

export const addProductWishList = (productId) => (dispatch, getState) => {
  const { wishList } = getState().user

  const newProduct = [productId]

  const productsIdWishList = wishList.filter(({ _id }) => _id !== productId)
    .map(({ _id }) => _id)

  if(productsIdWishList.length !== wishList.length) { //producto repetido
    newProduct.shift()
  }

  // producto nuevo
  axios.put('/api/users', { wishList: [...productsIdWishList, ...newProduct] })
    .then(({ data }) => {
      dispatch(setWishList(data.body.wishList.productId))
    })
}

export const removeProductWishList = (productId) => (dispatch, getState) => {
  const { wishList } = getState().user

  const updatedWishList = wishList.filter(({ _id }) => _id !== productId)
    .map(({ _id }) => _id)

  axios.put('/api/users', { wishList: updatedWishList })
  .then(({ data }) => {
      dispatch(setWishList(data.body.wishList.productId))
    })
}

export const updateItemFromCart = (id, newQuantity) => (dispatch, getState) => {
  dispatch({
    type: 'SET_CART_LOADING',
    payload: true
  })

  const { cart } = getState().user

  let data = cart.map(({ quantity, productId}) => {
    if(productId._id === id) {
      return {
        quantity: newQuantity,
        productId: productId._id
      }
    }
    return {
      quantity,
      productId: productId._id
    }
  })
  
  data = data.filter(({ quantity }) => quantity)

  axios.put('/api/users', { cart: data })
    .then(({ data }) => {
      dispatch(setCart(data.body.cart.products))
      dispatch({
        type: 'SET_CART_LOADING',
        payload: false
      })
    })
}

export const setCart = (cart) => {
  return {
    type: 'SET_CART',
    payload: cart,
  }
}

export const setWishList = (wishList) => {
  return {
    type: 'SET_WISH_LIST',
    payload: wishList,
  }
}

export const setUser = (user) => {
  return {
    type:'SET_USER',
    payload: user
  }
}

export const setAccessToken = (accessToken) => {
  return {
    type:'SET_TOKEN',
    payload: accessToken
  }
}

export const signUp = (userInfo) => (dispatch) => {

  axios.post('/api/auth/signup', userInfo)
    .then(({ data }) => {
      dispatch(setUser(data.body))
    })
}

export const signOut = () => (dispatch) => {
  
  axios.get('/api/auth/signout')
    .then(() => {
      dispatch({
        type: 'SIGN_OUT',
      })
    })
}

export const signIn = ({ email, password }) => (dispatch) => {

  axios.post('/api/auth/signin', { email, password })
    .then(({data}) => {
      dispatch(setUser(data.body))

      dispatch(setCart(data.body.cart.products))
      dispatch(setWishList(data.body.wishList.productId))
    })
}

export const whoAmI = () => (dispatch) => {
  
  axios.get('/api/auth/whoami')
  .then(({ data }) => {
    // hacer peticion a refreshToken cada 10min
    // console.log('whoamI')
    // console.log(data.body)
    dispatch(setUser(data.body))
    
    dispatch(setCart(data.body.cart.products))
    dispatch(setWishList(data.body.wishList.productId))
  })
  .catch(error => {
    // console.log('error en whoAmI', error)
  })
}

export const getToken = () => (dispatch) => {
  
  axios.get('/api/auth/refreshtoken')
    .then(({data}) => {

      dispatch({
        type:'SET_TOKEN',
        payload: data.body.accessToken
      })
    })
}

export const setAuthorizationHeader = () => (dispatch, getState) => {
  const { accessToken, interceptorAxios } = getState().user

  axios.interceptors.request.eject(interceptorAxios)
  if(accessToken) {
    const interceptor = axios.interceptors.request.use(config => {
      config.headers.Authorization = `Bearer ${accessToken}`
      // console.log(config)
      return config
    })
    dispatch({
      type: 'SET_INTERCEPTOR',
      payload: interceptor
    })
  }else {
    // const interceptor = axios.interceptors.request.use(config => {
    //   config.headers.Authorization = ""
    //   console.log('config')
    //   return config
    // })
    // dispatch({
    //   type: 'SET_INTERCEPTOR',
    //   payload: interceptor
    // })
  }
}

export const updatePerfil = (data) => (dispatch) => {

  axios.put('/api/users', data)
    .then(({ data }) => {
      // console.log(data.body)
      dispatch({
        type: 'UPDATE_PERFIL',
        payload : {
          firstName: data.body.firstName,
          lastName: data.body.lastName,
          DNI: data.body.DNI,
          phone: data.body.phone,
        }
      })
    })
}

export const updateAddress = (data) => (dispatch) => {

  axios.put('/api/users', { address : data})
    .then(({ data }) => {
      // console.log(data.body)
      dispatch({
        type: 'UPDATE_ADDRESS',
        payload : {
          street: data.body.address.street,
          dpto: data.body.address.dpto,
          province: data.body.address.province,
          city: data.body.address.city,
          zipCode: data.body.address.zipCode,
          num: data.body.address.num,
        }
      })
    })
}

export const updatePassword = (data) => (dispatch) => {

  axios.put('/api/users', { password : data})
    .then(({ data }) => {
      // console.log('termino')
    })
}

export const setPurchasePerfil = (userPerfil) => (dispatch) => {
  
  dispatch({
    type: 'SET_PURCHASE_PERFIL',
    payload: userPerfil
  })
}

export const setPurchaseAddress = (userAddress) => (dispatch) => {
  
  dispatch({
    type: 'SET_PURCHASE_ADDRESS',
    payload: userAddress
  })
}

export const setPurchasePay = (userPay) => (dispatch) => {

  dispatch({
    type: 'SET_PURCHASE_PAY',
    payload: userPay
  })
}