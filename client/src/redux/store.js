import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import global from './globalDucks'
import user from './userDucks'
import products from './productsDucks'
import categories from './categoriesDucks'

const rootReducer = combineReducers({
  user,
  global,
  products,
  categories,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
