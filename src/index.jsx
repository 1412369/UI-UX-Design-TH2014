import {render} from 'react-dom'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'
render(
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>,
    document.getElementById('my-app')
)