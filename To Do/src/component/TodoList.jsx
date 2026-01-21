import React, { useState } from "react";
import style from "./TodoList.module.css";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

export default function TodoList({ task, deleteTask, editTask }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  const onDelete = (id) => {
    deleteTask(id);
  };

  const onStartEdit = (index, content) => {
    setEditingIndex(index);
    setEditingValue(content);
  };

  const onCancelEdit = () => {
    setEditingIndex(null);
    setEditingValue("");
  };

  const onSaveEdit = () => {
    if (editingIndex === null) return;
    editTask(editingIndex, editingValue);
    onCancelEdit();
  };

  return (
    <>
      <div className={style.listWrapper}>
        <p>Task List</p>
        <ul className={style.list}>
          {task.length === 0 && <p>Henüz bir Task yok..</p>}

          {task.map((item, index) => (
            <li key={index} className={style.listitem}>
              <p>{item.content}</p>
              <div className={style.buttonWrapper}>
                <FaEdit
                  onClick={() => onStartEdit(index, item.content)}
                  style={{ cursor: "pointer" }}
                />
                <RiDeleteBin2Line
                  onClick={() => onDelete(index)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* MODAL: sadece editingIndex null değilken gözüksün */}
      {editingIndex !== null && (
        <div
          className={style.modalOverlay}
          onClick={onCancelEdit} // dışa tıklayınca kapansın
        >
          <div
            className={style.editModal}
            onClick={(e) => e.stopPropagation()} // içe tıklamada kapanmasın
          >
            <h3>Görevi Düzenle</h3>
            <input
              type="text"
              value={editingValue}
              onChange={(e) => setEditingValue(e.target.value)}
            />

            <div className={style.modalButtons}>
              <button onClick={onCancelEdit}>Vazgeç</button>
              <button onClick={onSaveEdit}>Kaydet</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
