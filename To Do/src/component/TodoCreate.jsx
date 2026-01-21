import React, { useState } from "react";
import css from "./TodoCreate.module.css";

export default function TodoCreate({ onCreateTodo }) {
  const [task, setTask] = useState("");
  const createTodo = () => {
    if (!task) {
      console.log("Herhangi bir Todo Girilmedi");
      return;
    }
    const request = {
      id: Math.floor(Math.random() * 5489345),
      content: task,
    };
    onCreateTodo(request);
  };
  return (
    <>
      <div className={css.taskWrapper}>
        <input
          type="text"
          placeholder="Task giriniz."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={createTodo}>Task Ekle</button>
      </div>
    </>
  );
}
