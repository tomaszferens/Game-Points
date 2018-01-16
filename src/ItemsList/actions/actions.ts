import { Action } from 'src/config/appTypes'

export const ADD_TO_CART = 'ADD_TO_CART'
export type AddToCartAction = Action<typeof ADD_TO_CART, { id: string }>
export const addToCart = (payload: { id: string }): AddToCartAction => ({
    type: ADD_TO_CART,
    payload,
})

export const FETCH_ITEMS_FULFILLED = 'FETCH_ITEMS_FULFILLED'
export type FetchItemsFulfilledAction = Action<typeof FETCH_ITEMS_FULFILLED, any>
export const fetchItemsFulfilled = (payload: any): FetchItemsFulfilledAction => ({
    type: FETCH_ITEMS_FULFILLED,
    payload,
})

export const FETCH_DISCOUNTS_FULFILLED = 'FETCH_DISCOUNTS_FULFILLED'
export type FetchDiscountsFulfilledAction = Action<typeof FETCH_DISCOUNTS_FULFILLED, any>
export const fetchDiscounstFulfilled = (payload: any): FetchDiscountsFulfilledAction => ({
    type: FETCH_DISCOUNTS_FULFILLED,
    payload,
})

// export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
// type RemoveFromCartAction = { type: typeof REMOVE_FROM_CART; payload: { id: number } }
// export const removeFromCart = (payload: { id: number }): RemoveFromCartAction => ({
//     type: REMOVE_FROM_CART,
//     payload,
// })| RemoveFromCartAction

export type ItemListAction = AddToCartAction | FetchItemsFulfilledAction | FetchDiscountsFulfilledAction
