import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default initialVal => {
  const [todos, setTodos] = useState(initialVal)

  return {
    todos,
    removeTodo: todoId => {
      const updatedTodos = todos.filter(todo => todo.id !== todoId)
      setTodos(updatedTodos)
    },
    toggleTodo: todoId => {
      const updatedTodos = todos.map(todo => {
        return todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      })
      setTodos(updatedTodos)
    },
    editTodo: (todoId, updateTodo) => {
      const updatedTodos = todos.map(todo => {
        return todo.id === todoId ? {...todo, task: updateTodo} : todo
      })
      setTodos(updatedTodos)
    }, 
    addToDo: newTodo => {
      setTodos([...todos, {id: uuidv4(), task: newTodo, completed: false} ])
    }
  }
}