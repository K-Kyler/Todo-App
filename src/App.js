import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  // States
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState('All');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Use effect to render back our todos in local storage when reloading page
  useEffect(() => {
    setLocalTodos();
  }, []);

  // Use effect to re-render todos when entered or filtered
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, filterStatus]);

  // Filter todos function
  const filterHandler = () => {
    switch(filterStatus) {
      case 'Completed':
        setFilteredTodos(todos.filter(todo => todo.isCompleted === true));
        break;
      
      case 'Uncompleted':
        setFilteredTodos(todos.filter(todo => todo.isCompleted === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  }

  // Function to save todos to local storage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  // Function to get todos when reloading the page
  const setLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    }

    else {
      let getLocalTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(getLocalTodos);
    }
  }

  return (
    <div className="App">
        <h1 className="m-5 text-center text-white">Khai's Todo List</h1>

        <Form 
          todos={todos} 
          setTodos={setTodos} 

          inputText={inputText} 
          setInputText={setInputText} 

          setFilterStatus={setFilterStatus}
        />

        <TodoList 
          filteredTodos={filteredTodos} 

          todos={todos} 
          setTodos={setTodos} 
        />
    </div>
  );
}

export default App;