import React, { useState } from 'react';
import TodoApp from './TodoApp';
import TodoForm from './TodoForm';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';

const App = () => {
  const initialTodos = [
    {id: 1, task: "Study Redux", completed: false},
    {id: 2, task: "Research for project", completed: true},
    {id: 3, task: "Start project", completed: false}
  ]

  const [ todos, setTodos ] = useState(initialTodos)

  const addToDo = newTodo => {
    setTodos([...todos, {id: 4, task: newTodo, completed: false} ])
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
      <TodoForm addToDo={addToDo} />
      <TodoList todos={todos} />
    </Paper>
  )
}

export default App;
