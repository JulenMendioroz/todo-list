import './App.css'
import { Button } from './Button'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'
import { useTodos } from './useTodos'

function App() {
  const { todos, addTodo, toggleTodo, removeCompletedTodos } = useTodos()

  return (
    <>
      <h1 className="title">TODO List</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList todos={todos} onToggleTodo={toggleTodo} />
      <Button onClick={removeCompletedTodos}>Remove completed</Button>
    </>
  )
}

export default App
