import 'glamor'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { App } from './App/App'
import { store } from './config/store'

import 'normalize.css'
import './styles/global.scss'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
)
