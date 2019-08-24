import React from 'react'
import { withRouter } from 'react-router-dom'

import controller from 'controllers/editTodo'
import TodoForm from 'view/components/TodoForm'

function EditTodo({model, history}) {
	return (
		<div>
			<h1>EDIT TODO</h1>
			{model.loaded && <TodoForm model = {model} onSuccess = {() => history.push('/all')}/>}
		</div>
	)
}

export default withRouter(controller(EditTodo))