import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todos',
    initialState: {todos: []},
    reducers: {
        addTodo(state, action) { 
            console.log(state);
            console.log(action);

            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload,
                completed: false,
            })

        },
        removeTodo(state, action){

        },
        toggleTodoComplete(state, action){

        }
    },
})

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions;

export default todoSlice.reducer;