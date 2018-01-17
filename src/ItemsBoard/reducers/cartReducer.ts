import { AppAction } from 'src/config/appTypes'
import { NEW_GAME } from 'src/ItemsBoard/actions/actions'
import { ADD_TO_CART } from 'src/ItemsList/actions/actions'
import { CartState } from 'src/models/Item'

export const cart = (state: CartState = {}, action: AppAction) => {
    switch (action.type) {
        case ADD_TO_CART:
            const { id } = action.payload!
            return { ...state, [id]: state[id] ? state[id] + 1 : 1 }
        case NEW_GAME:
            return {}
        default:
            return state
    }
}
