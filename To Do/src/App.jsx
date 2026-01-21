import { useEffect, useState } from "react";
import "./App.css";
import TodoCreate from "./component/TodoCreate";
import TodoList from "./component/TodoList";

function App() {
  //Redux olmadığı için Appden tanımlayıp taşıma yapacaz.
  const [taskList, setTaskList] = useState([]);
  const createTask = (newTodo) => {
    setTaskList([...taskList, newTodo]);
  };

  const deleteTask = (index) => {
    setTaskList((prev) => prev.filter((_, i) => i !== index));
  };

  const editTask = (index, newContent) => {
    setTaskList((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, content: newContent } : item
      )
    );
  };
  useEffect(() => {
    if (taskList.length == 0) {
      return console.log("No Task Here");
    }
  }, [taskList]);

  return (
    <>
      <TodoCreate onCreateTodo={createTask} />
      <TodoList task={taskList} deleteTask={deleteTask} editTask={editTask} />
    </>
  );
}

export default App;
