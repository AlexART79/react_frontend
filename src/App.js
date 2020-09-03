import React, {useEffect, useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { Container, Header } from 'semantic-ui-react';
import { TodoItemForm } from './components/TodoItemForm';

function App() {
  
  const apiHost = process.env.API_HOST ? process.env.API_HOST : '127.0.0.1'
  const apiEndpoint = 'http://'+apiHost+':5000/api/todo'

  const [todos, setTodos] = useState([])

  const getAll = () => {
    fetch(apiEndpoint).then(response => response.json().then(data => {
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
