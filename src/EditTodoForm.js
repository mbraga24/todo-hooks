import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';

const EditTodoForm = ({ id, task, editTodo, toggleEditForm }) => {
  const [value, setValue, reset] = useInputState(task)

  const handleChange = (e) => {
    setValue(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    editTodo(id, value)
    reset()
    toggleEditForm()
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField 
      value={value} 
      onChange={handleChange} 
      fullWidth
      />
    </form>
  )
}

export default EditTodoForm