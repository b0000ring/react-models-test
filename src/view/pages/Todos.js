import React from 'react'
import { withRouter } from 'react-router-dom'

import Table from 'view/components/Table'
import controller from 'controllers/getTodos'

function Todos({model, history}) {
    return (
			<div>
					<h1>TODOS</h1>
					<Table model = {model} />
					<br/>
					<button onClick = {() => history.push('/add')}>
						ADD TODO
					</button>
			</div>
    )
}

export default withRouter(controller(Todos))