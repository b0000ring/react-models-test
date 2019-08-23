import React from 'react'
import { withRouter } from 'react-router-dom'

import controller from 'controllers/addTodo'
import TodoForm from 'view/components/TodoForm'

function AddTodo({model, history}) {
	return (
		<div>
			<h1>ADD TODO</h1>
			<TodoForm onSuccess = {() => {history.push('/all')}} model = {model}/>
		</div>
	)
}

export default withRouter(controller(AddTodo))