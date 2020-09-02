import React, {useEffect, useState, setState} from 'react';
import './App.css';
import { TodoList } from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([])

  const getAll = () => {
    fetch('/api/todo').then(response => response.json().then(data => {
      setTodos(data.todos)
    }))
  }

  useEffect(() => {
    console.log('Render')
    getAll()
  }, [])
  
  return (
      <TodoList 
        items={todos} 
        onItemUpdate={ () => {
            console.log('Redraw list')
            getAll()
          }}
        onItemDelete={item => {
            console.log('Redraw list')
            getAll()
          }}
        onNewItem={item => {

          }}
       />
  );
}

export default App;
