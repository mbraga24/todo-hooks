import React from 'react';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const Todo = ({ id, task, completed, removeTodo, toggleTodo, editTodo }) => {

  const [isEditing, toggle] = useToggleState(false)

  const handleDelete = () => {
    removeTodo(id)
  }

  const handleToggle = () => {
    toggleTodo(id)
  }

  const handleEdit = () => {
    toggle(!isEditing)
  }

  return (

    <ListItem style={{ height: "64px"}}>
      
      { isEditing ? <EditTodoForm 
                      editTodo={editTodo} 
                      id={id} 
                      task={task}
                      toggleEditForm={toggle}
                      /> :
      <>
      <Checkbox tabIndex={-1} checked={completed} onClick={handleToggle}/>
      <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>{task}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="delete" onClick={handleDelete}>
          <DeleteIcon/>
        </IconButton>
        <IconButton aria-label="edit" onClick={handleEdit}>
          <EditIcon/>
        </IconButton>
      </ListItemSecondaryAction>
      </>
      }
      
    </ListItem>
  )
}
export default Todo;