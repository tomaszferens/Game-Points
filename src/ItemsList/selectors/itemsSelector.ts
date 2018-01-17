import { find as _find, reduce as _reduce } from 'lodash'
import { createSelector } from 'reselect'

import { AppState } from 'src/config/appTypes'
import { DiscountsState, Item, ItemState } from 'src/models/Item'

const toList = (items: ItemState, discounts: DiscountsState) =>
    _reduce<ItemState, Item[]>(
        items,
        (acc, val, id) => {
            const discount = _find(discounts, { itemId: id })

            return [
                ...acc,
                {
                    ...val,
                    hasDiscount: !!discount,
                    get: discount ? Number(discount.get) : null,
                    for: discount ? Number(discount.for) : null,
                    id,
                },
            ]
        },
        [],
    )

export const allItems = createSelector<AppState, ItemState, DiscountsState, Item[]>(
    state => state.items,
    state => state.discounts,
    toList,
)
