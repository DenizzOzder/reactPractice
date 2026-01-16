import { useAppDispatch, useAppSelector } from "../../redux/Hook";
import { deleteTodo } from "../../redux/slices/todoSlice";
export default function List() {
    const dispatch = useAppDispatch();
      const todos = useAppSelector((state) => state.todo.items);
        
  return (
           <div className="todoList-Area">
            {
                todos.length == 0 ? 
                    (<p> Henüz bir todo eklenmedi </p>)
                :
            <ul>
                {todos && todos.map((todo) => (
                    <li key={todo.id}>
                        <p>
                        {todo.text}
                        </p>       
            {/* Silme işlemi için ID gönderiyoruz */}
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>
                        Sil
                        </button>
                    </li>
                ))}
            </ul>} 
            </div>
  )
}
