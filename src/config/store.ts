import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import { rootEpic } from './rootEpic'
import { rootReducer } from './rootReducer'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function
    }
}

const reduxDevtool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const composeEnhancers = process.env.NODE_ENV === 'development' && reduxDevtool ? reduxDevtool : compose

const middlewares = [createEpicMiddleware(rootEpic)]

const enhancer = composeEnhancers(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, enhancer)
