import { Action } from 'src/config/appTypes'

export const NEW_GAME = 'NEW_GAME'
export type NewGameAction = Action<typeof NEW_GAME, { id: string }>
export const newGame = (): NewGameAction => ({
    type: NEW_GAME,
})

export type BoardAction = NewGameAction
