import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line react/prop-types
export default function TodoItem({ itemProp, handleChange, delTodo }) {

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

  const completedStyle = {
    width: '100%',
    padding: '10px',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <li style={styleContainer }>
      <input
        style={checkbox}
        type='checkbox'
        // eslint-disable-next-line react/prop-types
        checked={itemProp.completed}
        // eslint-disable-next-line react/prop-types
        onChange={() => handleChange(itemProp.id)}
      />
      <input 
        // eslint-disable-next-line react/prop-types
        style={itemProp.completed ? completedStyle : input}
        type='text'
        // eslint-disable-next-line react/prop-types
        defaultValue={itemProp.title}
      />
      <button style={button}><FontAwesomeIcon icon={faPen} /></button>
      {
      // eslint-disable-next-line react/prop-types
      <button style={button} onClick={() => delTodo(itemProp.id)}><FontAwesomeIcon icon={faTrash} /></button>
      }
      </li>
  )
}
