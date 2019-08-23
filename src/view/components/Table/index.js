import React from 'react'
import { withRouter } from 'react-router-dom'
import styles from './Table.module.scss'

function Table({model, history}) {
  function getHeaders() {
    return (
      <tr>
        {model.params.map(({name}) => (
          <th className = {styles.th} key = {`th_${name}`}>
           {name}
          </th>
        ))}
      </tr>
    )
  }

  function getItems() {
    const keys = model.getKeys()
    return keys.map((key) => {
      return renderItem(model.findByPk(key), key)
    })
  }

  function renderItem(data, key) {
    return (
      <tr onClick = {() => history.push(`/view/${data.id}`)} className = {styles.tr} key = {`row_${key}`}>
        {model.params.map(({name}) => (
          <td className = {styles.td} key = {`cell_${name}`}>
           {data[name]}
          </td>
        ))}
      </tr>
    )
  }

  return(
    <table className = {styles.table}>
      <thead>
        {getHeaders()}
      </thead>
      <tbody>
        {getItems()}
      </tbody>
    </table>
  )
}

export default withRouter(Table)