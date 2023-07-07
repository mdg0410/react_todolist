import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function TodoItem() {

  const styleContainer = {
    display: 'flex',
    width: '100%',
    fontSize: '1rem',
    borderRadius: '1vh',
  listStyleType: 'none',
  padding: '2vh 3vh',
  borderBottom: '1px solid #fff',
  background: '#f0efef',
  gap: '2vh',
  }

  const checkbox = {

  }

  const button = {
    cursor: 'pointer',
    background: 'transparent',
  order: '2',
  outline: 'none',
  border: 'none',
  marginLeft: '7px',
  }

  const input = {
    width: '100%',
    padding: '10px',
    border: 'none',
    outline: 'none',
    background: 'transparent',
  }

  return (
    <li style={styleContainer}>
      <input
        style={checkbox}
        type='checkbox'
        checked='true'
      />
      <input 
        style={input}
        type='text'
        defaultValue='test1'
      />
      <button style={button}><FontAwesomeIcon icon={faPen} /></button>
      <button style={button}><FontAwesomeIcon icon={faTrash} /></button>
    </li>
  )
}
