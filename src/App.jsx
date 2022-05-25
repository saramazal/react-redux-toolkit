import { useState } from 'react';
import TodoList from './components/TodoList'
import './App.css';

function App() {
const [todos, setTodos ] = useState([]);
const [text, setText] = useState('');

const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        }
      ])
      setText('');
    }
}

const toggleTodoComplete = (todoId) => {
  setTodos(
    todos.map(
      todo => {
      if (todo.id !==todoId) return todo;


      return {
        ...todo,
        completed: !todo.completed,
      }
    }
  )
  );
}

const removeTodo = (todoId) => {
  setTodos(todos.filter(todo => todo.id !== todoId))
}

return (
  <div className='input-todo container'>
    <label>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button> 
    </label>

   <TodoList 
     todos={todos}
     toggleTodoComplete={toggleTodoComplete}
     removeTodo={removeTodo}
     />
  </div>
);
}

export default App;
