import TodoModel from 'models/Todo'
import view from 'view/view'

export default function getTodos(Component) {
  const model = new TodoModel()
  model.getAll()

  return view(Component, model)
}