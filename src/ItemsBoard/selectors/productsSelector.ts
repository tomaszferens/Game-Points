import { find as _find, reduce as _reduce } from 'lodash'
import { createSelector } from 'reselect'

import { AppState } from 'src/config/appTypes'
import { CartState, DiscountsState, ItemState, Order } from 'src/models/Item'

export const itemsToList = (items: ItemState, cart: CartState, discounts: DiscountsState) =>
    _reduce<CartState, Order[]>(
        cart,
        (acc, amount, id) => {
            const discount = _find<DiscountsState>(discounts, { itemId: id })
            const item = items[id]
            const regularPrice = item.price * amount
            const priceWithDiscounts = discount
                ? regularPrice -
                  Math.floor(amount / Number(discount.get)) * (Number(discount.get) - Number(discount.for)) * item.price
                : regularPrice

            return [
                ...acc,
                {
                    ...item,
                    amount,
                    id,
                    priceWithDiscounts,
                    isCheaper: regularPrice < priceWithDiscounts,
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
