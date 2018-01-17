import { Action } from 'src/config/appTypes'
import { DiscountsState, ItemState } from 'src/models/Item'

export const ADD_TO_CART = 'ADD_TO_CART'
export type AddToCartAction = Action<typeof ADD_TO_CART, { id: string }>
export const addToCart = (payload: { id: string }): AddToCartAction => ({
    type: ADD_TO_CART,
    payload,
})

export const FETCH_ITEMS_FULFILLED = 'FETCH_ITEMS_FULFILLED'
export type FetchItemsFulfilledAction = Action<typeof FETCH_ITEMS_FULFILLED, ItemState>
export const fetchItemsFulfilled = (payload: ItemState): FetchItemsFulfilledAction => ({
    type: FETCH_ITEMS_FULFILLED,
    payload,
})

export const FETCH_DISCOUNTS_FULFILLED = 'FETCH_DISCOUNTS_FULFILLED'
export type FetchDiscountsFulfilledAction = Action<typeof FETCH_DISCOUNTS_FULFILLED, DiscountsState>
export const fetchDiscounstFulfilled = (payload: DiscountsState): FetchDiscountsFulfilledAction => ({
    type: FETCH_DISCOUNTS_FULFILLED,
    payload,
})

export type ItemListAction = AddToCartAction | FetchItemsFulfilledAction | FetchDiscountsFulfilledAction
