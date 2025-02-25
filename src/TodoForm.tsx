import { Button } from './Button'
import { NewTodo } from './types'
import { assertString } from './utils'

export function TodoForm({ onSubmit }: { onSubmit: (todo: NewTodo) => void }) {
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()

    const formData = new FormData(ev.currentTarget)

    const description = assertString(formData.get('description'))

    onSubmit({ description })

    ev.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input type="text" name="description" aria-label="Description" required className='input' />
      <Button>Add Todo</Button>
    </form>
  )
}
