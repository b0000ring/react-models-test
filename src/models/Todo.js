import Model from './Model'
import api from 'api'
import dataProvider from 'store/dataProvider'
import { saveTodos } from 'store/actions/todos'

class TodoModel extends Model {
  constructor({id, title, text, status} = {}) {
    super()
    this.subscribeToStore()

    this.id = id
    this.title = title
    this.text = text
    this.status = status
  }

  params = [
    {name: 'id', type: 'number', isRequired: true},
    {name: 'title', type: 'string', maxLength: 50, isRequired: true},
    {name: 'text', type: 'string', maxLength: 200, isRequired: true},
    {name: 'status', type: 'string'},
  ]

  storePart = 'todos'

  id = null
  title = ''
  text = ''
  status = ''

  async loadAll() {
    const todos = await api.get.todo()
    dataProvider.dispatch(saveTodos(todos.result))
  }

  getKeys() {
    return Object.keys(dataProvider.getState(this.storePart).items)
  }

  findByPk(id) {
    const data = dataProvider.getState(this.storePart).items[id]
    return {...data}
  }

  subscribeToStore = () => {
    this.storeUnsubscribe = dataProvider.subscribe(this.onStoreUpdate, this.storePart)
  }

  onStoreUpdate = (todos) => {
    this.updateView()
  }
}

export default TodoModel