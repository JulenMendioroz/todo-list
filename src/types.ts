export const TodoStatus = {
  InProgress: 'In progress',
  Completed: 'Completed',
} as const

export type TodoStatus = typeof TodoStatus[keyof typeof TodoStatus]

export type Todo = {
  id: string
  description: string
  status: TodoStatus
}

export type NewTodo = Pick<Todo, 'description'>

export type IdGenerator = () => string
