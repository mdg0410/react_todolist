import React from 'react'
import TodosList from './TodosList'
import InputTodo from './InputTodo'

export default function TodosLogic() {

  const styleContainer = {
    
  }

  return (
    <div style={styleContainer}>
      <InputTodo />
      <TodosList />
    </div>
  )
}
