import React from "react";
import style from "./TodoList.module.css";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

export default function TodoList({ task, deleteTask }) {
  const onDelete = (id) => {
    deleteTask(id);
  };
  return (
    <div className={style.listWrapper}>
      <p>Task List</p>
      <ul className={style.list}>
        {task.length == 0 && <p>Henüz bir Task yok..</p>}

        {task.map((item, index) => (
          <li key={index} className={style.listitem}>
            <p>{item.content}</p>
            <div className={style.buttonWrapper}>
              <FaEdit />
              <RiDeleteBin2Line onClick={() => onDelete(index)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
