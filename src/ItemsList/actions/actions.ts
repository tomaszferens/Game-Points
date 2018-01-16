import { Action } from 'src/config/appTypes'

export const ADD_TO_CART = 'ADD_TO_CART'
export type AddToCartAction = Action<typeof ADD_TO_CART, { id: string }>
export const addToCart = (payload: { id: string }): AddToCartAction => ({
    type: ADD_TO_CART,
    payload,
})

// export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
// type RemoveFromCartAction = { type: typeof REMOVE_FROM_CART; payload: { id: number } }
// export const removeFromCart = (payload: { id: number }): RemoveFromCartAction => ({
//     type: REMOVE_FROM_CART,
//     payload,
// })| RemoveFromCartAction

export type ItemListAction = AddToCartAction
