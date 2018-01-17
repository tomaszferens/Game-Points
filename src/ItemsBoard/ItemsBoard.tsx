import * as React from 'react'
import { connect } from 'react-redux'

import { Title, TopBar } from 'src/components'
import { AppState } from 'src/config/appTypes'
import { newGame } from 'src/ItemsBoard/actions/actions'
import { Board, BoardWrapper, BonusWrapper, NewGame, Price, Product } from 'src/ItemsBoard/components'
import { calculateBonus } from 'src/ItemsBoard/selectors/bonusSelector'
import { itemsSelector } from 'src/ItemsBoard/selectors/productsSelector'
import { AnimateWrapper, Img } from 'src/ItemsList/components'
import { Order } from 'src/models/Item'

interface ConnectedState {
    cart: Order[]
    bonus: number
}

interface ConnectedDispatch {
    newGame: typeof newGame
}

type ItemsBoardProps = ConnectedState & ConnectedDispatch

export class ItemsBoardComponent extends React.Component<ItemsBoardProps, {}> {
    public render(): JSX.Element {
        return (
            <BoardWrapper>
                <TopBar>
                    <Title>PLAYER ITEMS</Title>
                </TopBar>
                <Board>
                    {this.props.cart.map(e => (
                        <AnimateWrapper key={e.id}>
                            <Product>
                                <Img size={50} src={e.imgUrl} />
                                <AnimateWrapper key={e.id + e.amount}>
                                    <span>
                                        {e.amount} * {e.price}
                                    </span>
                                </AnimateWrapper>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Price isCheaper={e.isCheaper}>{(e.amount * e.price).toFixed(2)}</Price>
                                    {e.isCheaper && <Price> {e.priceWithDiscounts.toFixed(2)} </Price>}
                                </div>
                            </Product>
                        </AnimateWrapper>
                    ))}
                </Board>
                <BonusWrapper>Bonus: {this.props.bonus}$</BonusWrapper>
                <NewGame onClick={this.props.newGame}>NEW GAME</NewGame>
            </BoardWrapper>
        )
    }
}

function mapStateToProps(state: AppState): ConnectedState {
    const cart = itemsSelector(state)
    return {
        cart,
        bonus: calculateBonus(cart),
    }
}

export const ItemsBoard = connect<ConnectedState, ConnectedDispatch, {}, AppState>(mapStateToProps, { newGame })(
    ItemsBoardComponent,
)
