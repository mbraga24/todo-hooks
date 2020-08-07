import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Todo from './Todo';

const TodoList = ({ removeTodo, todos, toggleTodo, editTodo }) => {
  if (todos.length) 
  return (
    <Paper>
      <List>  
        {todos.map((todo, index) => (
        <>
          <Todo 
            key={todo.id}
            id={todo.id}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            task={todo.task} 
            completed={todo.completed}  
            />
            {index < todos.length - 1 && <Divider/>}
        </>
        ))}
      </List>
    </Paper>
  )
  return null;
}

export default TodoList;