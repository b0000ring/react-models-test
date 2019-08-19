import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

// mean interface but it is reserved word
import components from './reducers/components'
import todo from './reducers/todo'

const rootReducer = combineReducers({
    components: components,
    todo: todo,
})

const store = createStore(rootReducer, composeWithDevTools())

export default store