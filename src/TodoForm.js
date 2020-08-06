import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

const TodoForm = () => {

  const [value, handleChange, reset] = useInputState("")

  return (
    <Paper>
      <TextField value={value} onChange={handleChange} />
    </Paper>
  )
}

export default TodoForm;
