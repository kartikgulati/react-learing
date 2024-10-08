import { createSlice, nanoid } from "@reduxjs/toolkit";  //nanoid help to create unique id


const initialState = {
    todo : [{id: 1, text: "hello world"}]

}
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
        }
        state.todo.push(todo)
    },//value comes from action
        removeTodo: (state, action) => {
            state.todo = state.todo.filter((todo) => todo.id !== action.payload)
        },
    }//reducer has property and function 
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer       

// state has current state of the store and Action has the value that we give to the reducer

