import React from 'react';
import TodoList from './Components/TodoList/TodoList';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       Todo List
      </header>
      <TodoList />
    </div>
  );
}

export default App;
