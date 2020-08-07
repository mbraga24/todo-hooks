import React from 'react';
import useTodosState from './hooks/useTodosState';
import TodoForm from './TodoForm';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';

const TodoApp = () => {
  const initialTodos = [{ id: 1, task: "Pet a Monkey", completed: false }] 
  const { todos, removeTodo, toggleTodo, editTodo, addToDo } = useTodosState(initialTodos)

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
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            todos={todos} 
            />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp;