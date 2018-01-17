import { combineEpics } from 'redux-observable'

import { Epic } from 'src/config/appTypes'
import { SERVICE } from 'src/config/serviceIdentifiers'
import { container } from 'src/container'
import { fetchDiscounstFulfilled, fetchItemsFulfilled } from 'src/ItemsList/actions/actions'
import { Database } from 'src/services/Database'

const items$: Epic = () =>
    container
        .get<Database>(SERVICE.DATABASE)
        .get('items')
        .map(fetchItemsFulfilled)

const discounts$: Epic = () =>
    container
        .get<Database>(SERVICE.DATABASE)
        .get('discounts')
        .map(fetchDiscounstFulfilled)

export const dataEpic = combineEpics(items$, discounts$)
