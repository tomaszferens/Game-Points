import { reduce as _reduce } from 'lodash'
import { createSelector } from 'reselect'

import { AppState } from 'src/config/appTypes'
import { Item, ItemState } from 'src/models/Item'

const toList = (items: ItemState) =>
    _reduce<ItemState, Item[]>(
        items,
        (acc, val, id) => [
            ...acc,
            {
                ...val,
                id,
            },
        ],
        [],
    )

export const allItems = createSelector<AppState, ItemState, Item[]>(state => state.items, toList)
