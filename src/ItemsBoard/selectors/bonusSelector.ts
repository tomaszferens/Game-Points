import { createSelector } from 'reselect'

import { Order } from 'src/models/Item'

const calculate = (orders: Order[]) =>
    orders.reduce((acc, val) => {
        return acc + (val.price * val.amount - val.priceWithDiscounts)
    }, 0)

export const calculateBonus = createSelector<Order[], Order[], number>(cart => cart, calculate)
