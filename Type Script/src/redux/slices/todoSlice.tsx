import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// 1. Tekil Todo Objesi için interFace
export interface Todo {
  id: string;
  text: string;
}
// Localstorage setlenecek dizi

interface TodoState {
  items: Todo[];
}

//Local Storagedan günceli çeken fonksiyon.

const getInitialTodos = (): Todo[] => {
    const storedTodos = localStorage.getItem('todos');
    if(storedTodos)
    {
        return JSON.parse(storedTodos);
    }
    return [];
}
const initialState: TodoState = {
  items: getInitialTodos(),
};

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action:PayloadAction<Todo>) =>{
            state.items.push(action.payload);
            localStorage.setItem('todos',JSON.stringify(state.items));
        },
        deleteTodo: (state,action:PayloadAction<string>) => {
            state.items = state.items.filter((t) => t.id !== action.payload);
            if (state.items){
                localStorage.setItem('todos', JSON.stringify(state.items));
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer