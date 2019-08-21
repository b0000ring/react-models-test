import React from 'react'

import Table from 'view/components/Table'
import provider from 'controllers/getTodos'

function Todos({model}) {
    return (
			<div>
					<h1>TODOS</h1>
					<Table model={model} />
			</div>
    )
}

export default provider(Todos)