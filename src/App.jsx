import { useState, useEffect } from 'react';
import TodoList from './components/TodoList'
import InputField from './components/InputField'
import { useDispatch } from 'react-redux'
import {addTodo, fetchTodos} from './store/todoSlice.js'
import './App.css';

function App() {
const [text, setText] = useState('');
const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addTodo({ text }))
    setText('');
  }

  useEffect(() => {
  dispatch(fetchTodos())
}, [dispatch])

return (
  <div className='input-todo container'>
   <InputField
   text={text}
   handleInput={setText}
   handleSubmit={addTask} />

   <TodoList  />
  </div>
);
}

export default App;
