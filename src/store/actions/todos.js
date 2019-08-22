import { SAVE_TODOS } from '../constants'

export function saveTodos(todos) {
  return {
    type: SAVE_TODOS,
    data: todos
  }
} 