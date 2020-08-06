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
      <Paper>
        <TextField value={value} onChange={handleChange} />
      </Paper>
    </form>
  )
}

export default TodoForm;
