import { combineEpics } from 'redux-observable'
import { SERVICE } from 'src/config/serviceIdentifiers'
import { container } from 'src/container'
import { Database } from 'src/services/Database'

import { fetchDiscounstFulfilled, fetchItemsFulfilled } from 'src/ItemsList/actions/actions'

const items$ = () =>
    container
        .get<Database>(SERVICE.DATABASE)
        .get('items')
        .map(fetchItemsFulfilled)

const discounts$ = () =>
    container
        .get<Database>(SERVICE.DATABASE)
        .get('discounts')
        .map(fetchDiscounstFulfilled)

export const dataEpic = combineEpics(items$, discounts$)
