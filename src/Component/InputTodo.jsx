import React from 'react'
import '../Styles/InputTodo.css'

export default function InputTodo() {

  const formContainer = {
  display: 'flex',
  width: '95%',
  padding: '2.5vh',
  borderRadius: '1.5vh',
  boxShadow: '0 4px 14px 0 rgba(70, 70, 70, 0.38)',
  justifyContent: 'space-around',
  background: '#fff',
  fontSize: '1rem',
  }

  const inputStyle = {
  width:'85%',
  fontSize: '1rem',
  border: 'transparent'
  }

  const buttonSubmit = {
    background: 'transparent',
    border: 'none',
  color: '#5b5b5b',
  textTransform: 'capitalize',
  cursor: 'pointer',
  fontWeight: '600',
  marginRight: '10px',
  }

  return (
    <form  style={formContainer}>
      <input
        type='text'
        placeholder='Add Todo...'
        style={inputStyle} 
        className="input-text"
      />
       <button type="submit" style={buttonSubmit}>submit</button>
    </form>
  )
}
