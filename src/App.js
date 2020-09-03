import React, {useEffect, useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { Container, Header } from 'semantic-ui-react';
import { TodoItemForm } from './components/TodoItemForm';

function App() {
  
  const [todos, setTodos] = useState([])

  const getAll = () => {
    fetch('/api/todo').then(response => response.json().then(data => {
      setTodos(data.todos)
    }))
  }

  useEffect(() => {
    getAll()
  }, [])
  
  return (
    <Container>
      <Header className="list-header">My Todo List</Header>
      <TodoList 
        items={todos} 
        onItemUpdate={ () => {
            getAll()
          }}
        onItemDelete={item => {
            getAll()
          }}        
       />
       <hr />
      <TodoItemForm onNewItem={() => {
          getAll()
        }} 
      />
    </Container>
  );
}

export default App;
