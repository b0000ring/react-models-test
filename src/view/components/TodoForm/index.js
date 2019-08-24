import React, {useState} from 'react';

import styles from './TodoForm.module.scss'

export default function TodoForm({model, onSuccess}) {
  const [title, setTitle] = useState(model.title)
  const [text, setText] = useState(model.text)
  const [status, setStatus] = useState(model.status)
  const [error, setError] = useState('')

  function getStatuses() {
    return model.statuses.map(({name}) => {
      return (
        <option value = {name} key = {`status_${name}`}>{name}</option>
      )
    })
  }

  function onSubmit(e) {
    model.applyParams({
      title: title,
      text: text,
      status: status,
    })

    const validationError = model.validate()

    if(!validationError) {
      model.save().then(() => {
        onSuccess()
      })
    } else {
      setError(validationError)
    }
    e.preventDefault();
  }

  return (
    <form onSubmit = {onSubmit}>
      <div className = {`${styles.field} ${error['title'] && styles.error}`}>
        <label>Title</label>
        <input onChange = {(e) => setTitle(e.target.value)} value = {title} type = 'text' />
        {error['title'] && <span>{error['title']}</span>}
      </div>
      <div className = {`${styles.field} ${error['text'] && styles.error}`}> 
        <label>Text</label>
        <textarea onChange = {(e) => setText(e.target.value)} value = {text} />
        {error['text'] && <span>{error['text']}</span>}
      </div>
      <div className = {`${styles.field} ${error['status'] && styles.error}`}>
        <label>Status</label>
        <select onChange = {(e) => setStatus(e.target.value)} value = {status}>
          <option>choose</option>
          {getStatuses()}
        </select>
        {error['status'] && <span>{error['status']}</span>}
      </div>
      <div className = {styles.field}>
        <button className = {styles.save}>
          SAVE
        </button>
      </div>
    </form>
  )
}