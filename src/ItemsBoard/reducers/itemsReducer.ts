import { AppAction } from 'src/config/appTypes'
import { FETCH_ITEMS_FULFILLED } from 'src/ItemsList/actions/actions'

export const itemsReducer = (state = {}, action: AppAction) => {
    switch (action.type) {
        case FETCH_ITEMS_FULFILLED:
            return action.payload
        default:
            return state
    }
}
