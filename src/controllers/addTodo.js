import TodoModel from 'models/Todo'
import view from 'view/view'

export default function addTodo(Component) {
  return view(Component, () => {
    return new TodoModel()
  })
}