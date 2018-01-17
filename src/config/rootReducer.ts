import { combineReducers } from 'redux'

import { cart } from 'src/ItemsBoard/reducers/cartReducer'
import { discounts } from 'src/ItemsBoard/reducers/discountsReducer'
import { itemsReducer } from 'src/ItemsBoard/reducers/itemsReducer'
import { isLoading } from 'src/reducers/isLoading'

export const rootReducer = combineReducers({
    cart,
    items: itemsReducer,
    isLoading,
    discounts,
})
