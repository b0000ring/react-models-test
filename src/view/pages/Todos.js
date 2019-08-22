import React from 'react'

import Table from 'view/components/Table'
import controller from 'controllers/getTodos'

function Todos({model}) {
    return (
			<div>
					<h1>TODOS</h1>
					<Table model={model} />
			</div>
    )
}

export default controller(Todos)