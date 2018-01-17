import { AppAction } from 'src/config/appTypes'
import { NEW_GAME } from 'src/ItemsBoard/actions/actions'
import { ADD_TO_CART } from 'src/ItemsList/actions/actions'
import { CartState } from 'src/models/Item'

// import { omit as _omit } from 'lodash'

export const cart = (state: CartState = {}, action: AppAction) => {
    switch (action.type) {
        case ADD_TO_CART:
            const { id } = action.payload!
            return { ...state, [id]: state[id] ? state[id] + 1 : 1 }
        case NEW_GAME:
            return {}
        // case REMOVE_FROM_CART:
        //     const removeFromId = action.payload.id
        //     return state[removeFromId] && state[removeFromId] > 1
        //         ? { ...state, [removeFromId]: state[removeFromId] - 1 }
        //         : _omit(state, removeFromId)
        // case SET_PRODUCT_AMOUNT:
        //     const updateId = action.payload.id
        //     return action.payload.amount > 0
        //         ? { ...state, [updateId]: Number(action.payload.amount) }
        //         : _omit(state, updateId)
        default:
            return state
    }
}
