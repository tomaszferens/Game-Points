import * as React from 'react'
import { connect } from 'react-redux'

import { Title, TopBar } from 'src/components'
import { AppState } from 'src/config/appTypes'
import { addToCart } from 'src/ItemsList/actions/actions'
import { AnimateWrapper, Img, List, ListWrapper } from 'src/ItemsList/components'
import { allItems } from 'src/ItemsList/selectors/itemsSelector'
import { Item } from 'src/models/Item'

interface ConnectedState {
    items: Item[]
}

interface ConnectedDispatch {
    addToCart: typeof addToCart
}

type ItemListProps = ConnectedState & ConnectedDispatch

class ItemsListComponent extends React.Component<ItemListProps, {}> {
    public render(): JSX.Element {
        return (
            <ListWrapper>
                <TopBar>
                    <Title>Kahoot! POINTS</Title>
                </TopBar>
                <List>
                    {this.props.items.map(item => (
                        <AnimateWrapper key={item.id}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Img src={item.imgUrl} onClick={() => this.props.addToCart({ id: item.id })} />
                                <span>{item.name}</span>
                            </div>
                        </AnimateWrapper>
                    ))}
                </List>
            </ListWrapper>
        )
    }
}

function mapStateToProps(state: AppState): ConnectedState {
    return {
        items: allItems(state),
    }
}

export const ItemsList = connect<ConnectedState, ConnectedDispatch, {}, AppState>(mapStateToProps, { addToCart })(
    ItemsListComponent,
)
