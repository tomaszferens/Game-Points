import { AppAction } from 'src/config/appTypes'
import { items } from 'src/helpers/helper'

export const itemsReducer = (state = items, action: AppAction) => {
    switch (action.type) {
        default:
            return state
    }
}
