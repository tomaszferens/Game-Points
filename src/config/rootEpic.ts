import { combineEpics } from 'redux-observable'

import { Epic } from 'src/config/appTypes'

const epic: Epic = action$ => action$.ofType('A' as any)

export const rootEpic = combineEpics(epic)
