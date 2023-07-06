import React from 'react'
import TodosList from './TodosList'
import InputTodo from './InputTodo'

export default function TodosLogic() {

  const styleContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40%',
    padding: '0 6vh',

  }

  return (
    <div style={styleContainer}>
      <InputTodo />
      <TodosList />
    </div>
  )
}
