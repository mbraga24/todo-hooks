import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Todo from './Todo';

const TodoList = ({ removeTodo, todos, toggleTodo, editTodo }) => {
  return (
    <Paper>
      <List>  
        {todos.map(todo => (
        <>
          <Todo 
            id={todo.id}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            task={todo.task} 
            completed={todo.completed}  
            key={todo.id} />
          <Divider/>
        </>
        ))}
      </List>
    </Paper>
  )
}

export default TodoList;