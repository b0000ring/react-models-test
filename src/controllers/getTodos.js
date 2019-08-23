import TodoModel from 'models/Todo'
import view from 'view/view'

export default function getTodos(Component) {
  return view(Component, (updateView) => {
    const model = new TodoModel()
    model.updateView = updateView
    model.loadAll()
    return model
  })
}