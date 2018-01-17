import * as React from 'react'
import { connect } from 'react-redux'

import { Title, TopBar } from 'src/components'
import { AppState } from 'src/config/appTypes'
import { BoardWrapper, BonusWrapper } from 'src/ItemsBoard/components'
import { itemsSelector } from 'src/ItemsBoard/selectors/productsSelector'
import { AnimateWrapper, Img } from 'src/ItemsList/components'
import { Order } from 'src/models/Item'

interface ConnectedState {
    cart: Order[]
}

interface ConnectedDispatch {}

type ItemsBoardProps = ConnectedState & ConnectedDispatch

export class ItemsBoardComponent extends React.Component<ItemsBoardProps, {}> {
    public render(): JSX.Element {
        return (
            <BoardWrapper>
                <TopBar>
                    <Title>PLAYER ITEMS</Title>
                </TopBar>
                <div style={{ flex: 1, overflowY: 'scroll' }}>
                    {this.props.cart.map(e => (
                        <AnimateWrapper key={e.id}>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    margin: 10,
                                }}
                            >
                                <Img size={50} src={e.imgUrl} />
                                <AnimateWrapper key={e.id + e.amount}>
                                    <span>{e.amount}</span>
                                </AnimateWrapper>
                                <span>{(e.amount * e.price).toFixed(2)}</span>
                            </div>
                        </AnimateWrapper>
                    ))}
                </div>
                <BonusWrapper>Bonus</BonusWrapper>
                <div style={{ textAlign: 'center', padding: 10 }}>NEW GAME</div>
            </BoardWrapper>
        )
    }
}

function mapStateToProps(state: AppState): ConnectedState {
    return {
        cart: itemsSelector(state),
    }
}

export const ItemsBoard = connect<ConnectedState, ConnectedDispatch, {}, AppState>(mapStateToProps)(ItemsBoardComponent)
