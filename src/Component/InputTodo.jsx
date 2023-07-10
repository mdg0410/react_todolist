import { useState } from 'react';
import '../Styles/InputTodo.css'

// eslint-disable-next-line react/prop-types
export default function InputTodo({addTodoItem}) {

  const divContainer = {
    display: 'flex',
  width: '95%',
  flexDirection: 'column',
  }

  const span = {
    display: 'flex',
    marginLeft: '1vh',
    color: '#f00'
  }

  const formContainer = {
  display: 'flex',
  width: '100%',
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

  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()){
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item.')
    }
  }

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  return (
    <div style={divContainer}>
    <form  style={formContainer} onSubmit={handleSubmit}>
      <input
        style={inputStyle} 
        className="input-text"
        type='text'
        placeholder='Add Todo...'
        value={title}
        onChange={handleChange}
      />
       <button type="submit" style={buttonSubmit}>submit</button>
    </form>
    <span style={span}>{message}</span>
    </div>
  )
}
