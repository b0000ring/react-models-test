const todos = [
	{
		id: 1,
		title: 'TODO 1',
		text: 'This is a test TODO №1',
		status: 'active',
	},
	{
		id: 2,
		title: 'TODO 2',
		text: 'This is a test TODO №2',
		status: 'active',
	},
	{
		id: 3,
		title: 'TODO 3',
		text: 'This is a test TODO №3',
		status: 'active',
	},
]

// this is a pseudo api
const api = {
    get: {
			todos: async () => {
				return {
					result: todos
				}
			},
			todo: async (id) => {
				let todo = {}
				todos.forEach((item) => {
					if(item.id == id) {
						todo = item
					}
				})
				return {
					result: todo
				}
			}
		},
		post: {
			todo: async (todo) => {
				const newTodo = {
					...todo,
					id: todos.length + 1
				}
				todos.push(newTodo)
				return {
					result: newTodo
				} 
			}
		},
		patch: {
			todo: async (todo) => {
				let patchedTodo = null
				todos.forEach((item, i) => {
					if(item.id === todo.id){
						todos[i] = todo
						patchedTodo = todos[i]
					}
				})
				return {
					result: patchedTodo
				}
			}
		}
}

export default api