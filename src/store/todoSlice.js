import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')

        const data = await response.json();
        return data;
    }
)

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: null,
        errors: null,
    },
    reducers: {
        addTodo(state, action) { 
        
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            })

        },
        removeTodo(state, action) { 
           state.todos = state.todos.filter(todo => todo.id !== action.payload.id) 
        },
        
        toggleTodoComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id)
            toggledTodo.completed = !toggledTodo.completed;
        }
    },
    extraReducers: {
        [fetchTodos.pending]: (state) => { 
            state.status = 'loading';
            state.error = null;
        },
        [fetchTodos.fulfilled]: (state, action) => { 
            state.status = 'resolved';
            state.todos = action.payload;
        },
        [fetchTodos.rejected]: (state, action) => {}
    }
})

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions;

export default todoSlice.reducer;