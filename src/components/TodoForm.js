// src/components/TodoForm.js
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo({
        text: input,
        description: description,
        completed: false,
        createdAt: new Date().toISOString()
      });
      setInput('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="form-group">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          id="title"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Title"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description" className="form-label">Description</label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="input-field"
        />
      </div>
      <button type="submit" className="add-button">Add Todo</button>
    </form>
  );
};

export default TodoForm;
