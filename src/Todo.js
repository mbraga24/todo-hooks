import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const Todo = ({ id, task, completed, removeTodo, toggleTodo }) => {

  const handleDelete = () => {
    removeTodo(id)
  }

  const handleToggle = () => {
    toggleTodo(id)
  }

  return (
    <ListItem>
      <Checkbox tabIndex={-1} checked={completed} onClick={handleToggle}/>
      <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>{task}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="delete" onClick={handleDelete}>
          <DeleteIcon/>
        </IconButton>
        <IconButton aria-label="edit">
          <EditIcon/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
export default Todo;