import { reduce as _reduce } from 'lodash'
import { createSelector } from 'reselect'

import { AppState } from 'src/config/appTypes'
import { CartState, ItemState, Order } from 'src/models/Item'

export const itemsToList = (items: ItemState, cart: CartState) =>
    _reduce<CartState, Order[]>(
        cart,
        (acc, amount, id) => [
            ...acc,
            {
                ...items[id],
                amount,
                id,
            },
        ],
        [],
    )

export const itemsSelector = createSelector<AppState, ItemState, CartState, Order[]>(
    state => state.items,
    state => state.cart,
    itemsToList,
)
