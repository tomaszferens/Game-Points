import * as React from 'react'
import { connect } from 'react-redux'

import { Title, TopBar } from 'src/components'
import { AppState } from 'src/config/appTypes'
import { BoardWrapper } from 'src/ItemsBoard/components'
import { itemsSelector } from 'src/ItemsBoard/selectors/productsSelector'
import { Product } from 'src/ItemsList/components'
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
                <div>{this.props.cart.map(e => <Product key={e.id}>{e.name}</Product>)}</div>
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
