import './App.css'
import { Button } from './Button'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'
import { useTodos } from './useTodos'

function App() {
  const { todos, addTodo, completeTodo, removeCompletedTodos } = useTodos()

  return (
    <>
      <h1 className="title">TODO List</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList todos={todos} onCompleteTodo={completeTodo} />
      <Button onClick={removeCompletedTodos}>Remove completed</Button>
    </>
  )
}

export default App
