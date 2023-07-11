import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function InputTodo({addTodoItem}) {

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
    <>
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Add Todo..."
        className="input-text"
        value={title}
        onChange={handleChange}
      />
       <button className="input-submit" type="submit">submit</button>
    </form>
    <span className="submit-warning">{message}</span>
    </>
  )
}
