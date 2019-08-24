import { SAVE_TODOS, SAVE_TODO } from '../constants'

export function saveTodos(todos) {
  return {
    type: SAVE_TODOS,
    data: todos
  }
} 

export function saveTodo(todo) {
  return {
    type: SAVE_TODO,
    data: todo
  }
}