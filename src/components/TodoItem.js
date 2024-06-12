// src/components/TodoItem.js
import React, { useState } from 'react';

const TodoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [newDescription, setNewDescription] = useState(todo.description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, newText, newDescription);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewText(todo.text);
    setNewDescription(todo.description);
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <>
          <div className="todo-text-container">
            <div className="form-group">
              <label htmlFor={`edit-title-${todo.id}`} className="form-label">Title</label>
              <input
                id={`edit-title-${todo.id}`}
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="edit-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor={`edit-description-${todo.id}`} className="form-label">Description</label>
              <input
                id={`edit-description-${todo.id}`}
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                className="edit-input"
              />
            </div>
          </div>
          <button onClick={handleSave} className="save-button">Save</button>
          <button onClick={handleCancel} className="cancel-button">Cancel</button>
        </>
      ) : (
        <>
          <div className="todo-text-container">
            <div className="todo-details">
              <span
                className={`todo-text ${todo.completed ? 'completed' : ''}`}
                onClick={() => toggleComplete(todo.id, todo.completed)}
              >
                {todo.text}
              </span>
              <span className="todo-description">
                {todo.description}
              </span>
            </div>
          </div>
          <div className="button-group">
            <button onClick={handleEdit} className="edit-button">Edit</button>
            <button onClick={() => deleteTodo(todo.id)} className="delete-button">Delete</button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
