import TodoModel from 'models/Todo'
import view from 'view/view'

export default function addTodo(Component) {
  return view(Component, (updateView) => {
    const id = window.location.pathname.split('/')[2]
    const model = new TodoModel().findByPk(id)
    model.updateView = updateView
    return model
  })
}