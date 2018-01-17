import { AppAction } from 'src/config/appTypes'
import { FETCH_DISCOUNTS_FULFILLED } from 'src/ItemsList/actions/actions'

export const discounts = (state = {}, action: AppAction) => {
    switch (action.type) {
        case FETCH_DISCOUNTS_FULFILLED:
            return action.payload
        default:
            return state
    }
}
