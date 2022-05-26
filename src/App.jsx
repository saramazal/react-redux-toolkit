import {useState, useEffect} from 'react'
import TodoList from './components/TodoList'
import InputField from './components/InputField'
import {useDispatch, useSelector} from 'react-redux'
import {addTodo, fetchTodos} from './store/todoSlice.js'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const { status, error } = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }))
      setText('')
    }
  }

  useEffect(
    () => {
      dispatch(fetchTodos())
    },
    [dispatch]
  )

  return (
    <div className="input-todo container">
      <InputField
        text={text}
        handleInput={setText}
        handleAction={handleAction}
      />
      {status === 'loading' && <h2>loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}

      <TodoList />
    </div>
  )
}

export default App
