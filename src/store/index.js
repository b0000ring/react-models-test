import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

// mean interface but it is reserved word
import components from './reducers/components'
import todos from './reducers/todos'

const rootReducer = combineReducers({
    components: components,
    todos: todos,
})

const store = createStore(rootReducer, composeWithDevTools())

export default store