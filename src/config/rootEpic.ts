import { combineEpics } from 'redux-observable'

import { dataEpic } from 'src/epics/dataEpic'

export const rootEpic = combineEpics(dataEpic)
