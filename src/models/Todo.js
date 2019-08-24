import Model from './Model'
import api from 'api'
import dataProvider from 'store/dataProvider'
import { saveTodos, saveTodo } from 'store/actions/todos'

class TodoModel extends Model {
  constructor({id, title = '', text = '', status = ''} = {}) {
    super()
    this.subscribeToStore()

    this.id = id
    this.title = title
    this.text = text
    this.status = status
  }

  params = [
    {name: 'id'},
    {name: 'title', type: 'string', maxLength: 50, isRequired: true},
    {name: 'text', type: 'string', maxLength: 200, isRequired: true},
    {name: 'status', type: 'string', isRequired: true},
  ]

  statuses = [
    {name: 'active'},
    {name: 'on hold'},
    {name: 'done'}
  ]

  loaded = true

  storePart = 'todos'

  id = null
  title = ''
  text = ''
  status = ''

  async loadAll() {
    const todos = await api.get.todos()
    dataProvider.dispatch(saveTodos(todos.result))
  }

  async loadById(id) {
    this.loaded = false
    const todo = await api.get.todo(id)
    dataProvider.dispatch(saveTodo(todo.result))
    for(let key in todo.result) {
      this[key] = todo.result[key]
    }
    this.loaded = true
    this.onStoreUpdate()
  }

  getKeys() {
    return Object.keys(dataProvider.getState(this.storePart).items)
  }

  async save() {
    if(this.id) {
      await api.patch.todo({
        id: this.id,
        title: this.title,
        text: this.text,
        status: this.status,
      })
    } else {
      await api.post.todo({
        title: this.title,
        text: this.text,
        status: this.status,
      })
    }
  }

  findByPk(id) {
    let data = dataProvider.getState(this.storePart).items[id]
    if(!data) {
      const model = new TodoModel()
      model.loadById(id)
      return model
    } else {
      return new TodoModel({...data})
    }
  }

  subscribeToStore = () => {
    this.storeUnsubscribe = dataProvider.subscribe(this.onStoreUpdate, this.storePart)
  }

  onStoreUpdate = () => {
    this.updateView && this.updateView()
  }
}

export default TodoModel