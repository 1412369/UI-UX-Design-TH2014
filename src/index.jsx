import { render } from 'react-dom'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import { Provider } from 'react-redux'
import store from './redux/store'
import 'react-infinite-calendar/styles.css';
render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('my-app')
)