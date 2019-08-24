import { SAVE_TODOS, SAVE_TODO } from '../constants'

export default function(state, action) {
	const defaultState = {
		items: {}
	}
	if(!state) {
		state = defaultState
	}

	switch(action.type) {
		case SAVE_TODOS:
			const newTodos = {}
			action.data.forEach((item) => {
				newTodos[item.id] = item
			})
			return {
				items: newTodos
			}
		case SAVE_TODO:
			const todo = action.data
			return {
				items: {
					...state.items,
					[todo.id]: todo
				}
			}
		default: 
			return state
	}
}