import "./Form.css"
import List from '../List/List.tsx'
import { useState } from "react"
import { addTodo } from "../../redux/slices/todoSlice.tsx"
import { useAppDispatch } from "../../redux/Hook.ts"
export default function Form() {

  const [text,setText] = useState('');
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    if(!text.trim()) return;
    //Yeni Todo 
    const newTodo = {
      id:crypto.randomUUID(),
      text:text
    };
    dispatch(addTodo(newTodo));
    setText('')
  }
  return (
    <div>
        <div className="inputArea">
            <input type="text" 
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Eklenecek Todo"
            />
            <button onClick={handleAdd}>To Do Ekle</button>
        </div>
        <List />
    </div>
  )
}
