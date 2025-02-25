import { Todo, TodoStatus } from './types'

export function TodoList({ todos, onCompleteTodo }: { todos: Todo[]; onCompleteTodo: (index: number) => void }) {
  const handleKeyDown = (index: number) => (ev: React.KeyboardEvent<HTMLLIElement>) => {
    if (ev.key === 'Enter') {
      onCompleteTodo(index)
    }
  }

  return (
    <ul className="todo-list">
      {todos.map(({ id, description, status }, index) => (
        <li
          key={id}
          onClick={() => onCompleteTodo(index)}
          tabIndex={0}
          role="button"
          onKeyDown={handleKeyDown(index)}
          className={`todo ${status === TodoStatus.Completed ? 'todo-completed' : 'todo-in-progress'}`}
        >
          <p>{description}</p>
          <div>
            <p className="todo__status">status:</p>
            <p className="todo__status">{status.toUpperCase()}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
