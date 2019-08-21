import React from 'react'

export default function Table({model}) {
  function getHeaders() {
    return model.params.map(({name}) => (
      <th key={`header_${name}`}>
        <td>
          {name}
        </td>
      </th>
    ))
  }

  function getItems() {
    return model.params.map(({name}) => (
      <tr key={`row_${name}`}>
        <td>
          {model[name]}
        </td>
      </tr>
    ))
  }

  return(
    <table>
      {getHeaders()}
      {getItems()}
    </table>
  )
}