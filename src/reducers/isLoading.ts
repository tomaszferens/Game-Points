import { AppAction } from 'src/config/appTypes'
import { FETCH_ITEMS_FULFILLED } from 'src/ItemsList/actions/actions'

export const isLoading = (state: boolean = true, action: AppAction) => {
    switch (action.type) {
        case FETCH_ITEMS_FULFILLED:
            return false
        default:
            return state
    }
}
