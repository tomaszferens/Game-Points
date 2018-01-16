import * as React from 'react'

import { AppWrapper } from 'src/App/AppWrapper'
import { Root } from 'src/App/Root'
import { ItemsBoard } from 'src/ItemsBoard/ItemsBoard'
import { ItemsList } from 'src/ItemsList/ItemsList'

export class App extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <AppWrapper>
                <Root>
                    <ItemsList />
                    <ItemsBoard />
                </Root>
            </AppWrapper>
        )
    }
}
