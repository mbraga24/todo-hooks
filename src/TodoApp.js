import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';

const TodoApp = () => {
  const initialTodos = [
    {id: 1, task: "Study Redux", completed: false},
    {id: 2, task: "Research for project", completed: true},
    {id: 3, task: "Start project", completed: false}
  ]

  const [ todos, setTodos ] = useState(initialTodos)

  const addToDo = newTodo => {
    setTodos([...todos, {id: uuidv4(), task: newTodo, completed: false} ])
  }

  const removeTodo = todoId => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId)
    setTodos(updatedTodos)
  }

  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo => {
      return todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    })
    setTodos(updatedTodos)
  }

  return (
    <Paper style={{
      padding: 0,
      margin: 0,
      height: "100vh",
      backgroundColor: "#fafafa"
    }}
    elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addToDo={addToDo} />
          <TodoList 
            removeTodo={removeTodo} 
            todos={todos} 
            toggleTodo={toggleTodo}
            />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp;