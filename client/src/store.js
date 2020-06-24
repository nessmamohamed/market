import { createStore , applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/itemReducers'

 const middleware = [thunk],
       initState={},
       store = createStore(reducer, initState, compose(
           applyMiddleware(...middleware)
           ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
       ))

export default store 