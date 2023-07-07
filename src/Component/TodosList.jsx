import React from 'react'
import TodoItem from './TodoItem'

export default function TodosList() {

  const styleContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '2vh',
  }

  return (
    <ul style={styleContainer}>
      {
        //Map
      }
      <TodoItem />
    </ul>
  )
}
