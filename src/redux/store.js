import appReducers from './reducer'
import {createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
export default createStore(appReducers,composeWithDevTools(
    applyMiddleware()
))