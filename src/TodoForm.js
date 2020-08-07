import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

const TodoForm = ({ addToDo }) => {

  const [value, handleChange, reset] = useInputState("")

  const handleSubmit = e => {
    e.preventDefault()
    addToDo(value)
    reset()
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
        <TextField 
          value={value} 
          onChange={handleChange} 
          label="Add New Todo"
          margin="normal"
          fullWidth
          />
      </Paper>
    </form>
  )
}

export default TodoForm;
