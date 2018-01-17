import { Epic as _Epic } from 'redux-observable'

import { ItemListAction } from 'src/ItemsList/actions/actions'
import { CartState, DiscountsState, ItemState } from 'src/models/Item'

export type AppAction = ItemListAction

export interface AppState {
    cart: CartState
    items: ItemState
    isLoading: boolean
    discounts: DiscountsState
}

export interface Action<T, P = void, M = void> {
    readonly type: T
    readonly payload?: P
    readonly meta?: M
    readonly error?: boolean
}

export type Epic = _Epic<AppAction, AppState>
