import { find as _find, reduce as _reduce } from 'lodash'
import { createSelector } from 'reselect'

import { AppState } from 'src/config/appTypes'
import { CartState, DiscountsState, ItemState, Order } from 'src/models/Item'

export const itemsToList = (items: ItemState, cart: CartState, discounts: DiscountsState) =>
    _reduce<CartState, Order[]>(
        cart,
        (acc, amount, id) => {
            const discount = _find<DiscountsState>(discounts, { itemId: id })
            const withDiscount = discount
                ? items[id].price * amount -
                  Math.floor(amount / Number(discount.get)) *
                      (Number(discount.get) - Number(discount.for)) *
                      items[id].price
                : items[id].price
            return [
                ...acc,
                {
                    ...items[id],
                    amount,
                    id,
                    withDiscount,
                },
            ]
        },
        [],
    )

export const itemsSelector = createSelector<AppState, ItemState, CartState, DiscountsState, Order[]>(
    state => state.items,
    state => state.cart,
    state => state.discounts,
    itemsToList,
)
