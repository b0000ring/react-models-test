import { SAVE_TODOS } from '../constants'

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
		default: 
			return state
	}
}