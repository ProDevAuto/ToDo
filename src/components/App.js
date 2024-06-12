import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { database, ref, push, onValue, remove, update } from '../firebase/firebase';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todosRef = ref(database, 'todos');
    onValue(todosRef, (snapshot) => {
      const data = snapshot.val();
      const todosList = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
      setTodos(todosList);
    });
  }, []);

  const addTodo = (todo) => {
    const todosRef = ref(database, 'todos');
    push(todosRef, todo);
  };

  const deleteTodo = (id) => {
    const todoRef = ref(database, `todos/${id}`);
    remove(todoRef);
  };

  const toggleComplete = (id, completed) => {
    const todoRef = ref(database, `todos/${id}`);
    update(todoRef, { completed: !completed });
  };

  const editTodo = (id, newText, newDescription) => {
    const todoRef = ref(database, `todos/${id}`);
    update(todoRef, { text: newText, description: newDescription });
  };

  return (
    <div className="app">
      <h1 className="app-title">Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} editTodo={editTodo} />
    </div>
  );
};

export default App;
