import * as React from 'react'
import { connect } from 'react-redux'

import { AppWrapper } from 'src/App/AppWrapper'
import { Root } from 'src/App/Root'
import { Loader } from 'src/components'
import { AppState } from 'src/config/appTypes'
import { ItemsBoard } from 'src/ItemsBoard/ItemsBoard'
import { ItemsList } from 'src/ItemsList/ItemsList'

interface ConnectedState {
    isLoading: boolean
}

export class AppComponent extends React.Component<ConnectedState, {}> {
    public render(): JSX.Element {
        return (
            <AppWrapper>
                {this.props.isLoading ? (
                    <Loader />
                ) : (
                    <Root>
                        <ItemsList />
                        <ItemsBoard />
                    </Root>
                )}
            </AppWrapper>
        )
    }
}

export const App = connect<ConnectedState, {}, {}, AppState>(state => ({ isLoading: state.isLoading }))(AppComponent)
