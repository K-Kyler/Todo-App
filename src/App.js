import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Todolist from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
        <h1 className="m-5 text-center text-white">Khai's Todo List</h1>
        <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
        <Todolist />
    </div>
  );
}

export default App;