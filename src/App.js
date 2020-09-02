import React, {useEffect, useState, setState} from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { Container } from 'semantic-ui-react';
import { TodoItemForm } from './components/TodoItemForm';

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
    <Container>

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
      <TodoItemForm onNewItem={newItem => setTodos(existingItems => [...existingItems, newItem])} />
    </Container>
  );
}

export default App;
