import { createSelector } from 'reselect'

import { Order } from 'src/models/Item'

const calculateBonusSelector = (orders: Order[]) =>
    -orders.reduce((acc, val) => {
        return acc + (val.price * val.amount - val.priceWithDiscounts)
    }, 0)

export const calculateBonus = createSelector<Order[], Order[], number>(cart => cart, calculateBonusSelector)

const calculateTotalSelector = (orders: Order[]) =>
    orders.reduce((acc, val) => {
        return acc + val.priceWithDiscounts
    }, 0)

export const calculateTotal = createSelector<Order[], Order[], number>(cart => cart, calculateTotalSelector)
