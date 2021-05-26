import {createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './root-reducer.js'
import logger from 'redux-logger'


const middlewares = [thunk,logger]

const store = createStore(reducers,applyMiddleware(...middlewares))

export default store