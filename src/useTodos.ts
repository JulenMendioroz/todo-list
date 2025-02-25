import { useState } from 'react'
import { TodoStatus, type IdGenerator, type NewTodo, type Todo } from './types'

type UseTodosDeps = { generateId: IdGenerator }

export function useTodos(
  initialTodos: Todo[] = [],
  { generateId }: UseTodosDeps = { generateId: crypto.randomUUID.bind(crypto) }
) {
  const [todos, setTodos] = useState(initialTodos)

  const addTodo = ({ description }: NewTodo) => {
    const newTodo = {
      id: generateId(),
      description,
      status: TodoStatus.InProgress,
    }
    setTodos((prev) => prev.concat(newTodo))
  }

  const toggleTodo = (index: number) => {
    setTodos((prev) => {
      const todo = prev[index]
      const nextTodos = [...prev]
      const nextStatus = todo.status === TodoStatus.Completed ? TodoStatus.InProgress : TodoStatus.Completed
      nextTodos[index] = { ...todo, status: nextStatus }
      return nextTodos
    })
  }

  const removeCompletedTodos = () => {
    setTodos((prev) => prev.filter((todo) => todo.status !== TodoStatus.Completed))
  }

  return { todos, addTodo, completeTodo: toggleTodo, removeCompletedTodos }
}
