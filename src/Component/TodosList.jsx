/* eslint-disable react/prop-types */
import React from 'react'
import TodoItem from './TodoItem'

// eslint-disable-next-line react/prop-types
export default function TodosList({todosProps, handleChange, delTodo, setUpdate}) {

  return (
    <ul>
     {todosProps.map((todo) => (
      <TodoItem 
      key={todo.id} 
      itemProp={todo} 
      handleChange={handleChange}
      delTodo={delTodo}
      setUpdate={setUpdate}
      />
     ))}
    </ul>
  )
}
