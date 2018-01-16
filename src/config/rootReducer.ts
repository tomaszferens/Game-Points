import { combineReducers } from 'redux'

import { cart } from 'src/ItemsBoard/reducers/cartReducer'
import { itemsReducer } from 'src/ItemsBoard/reducers/itemsReducer'

export const rootReducer = combineReducers({
    cart,
    items: itemsReducer,
})
