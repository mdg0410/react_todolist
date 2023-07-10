import React from 'react'
import TodoItem from './TodoItem'

// eslint-disable-next-line react/prop-types
export default function TodosList({todosProps, handleChange, delTodo}) {

  const styleContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '2vh',
    gap: '0.5vh',
  }

  return (
    <ul style={styleContainer}>
     {
     // eslint-disable-next-line react/prop-types
     todosProps.map((todo) => (
      <TodoItem 
      key={todo.id} 
      itemProp={todo} 
      handleChange={handleChange}
      delTodo={delTodo}
      />
     ))}
    </ul>
  )
}
