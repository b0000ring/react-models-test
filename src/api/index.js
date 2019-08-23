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
			todo: async () => {
				return {
					result: todos
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
				let pathcedTodo = null
				todos.forEach((item, i) => {
					if(item.id === todo.id){
						todos[i] = todo
						pathcedTodo = todos[i]
					}
				})
				return {
					result: pathcedTodo
				}
			}
		}
}

export default api