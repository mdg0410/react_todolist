import React from 'react'
import Header from './Header';
import TodosLogic from './TodosLogic';

export default function App() {

  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '10vh', 
    gap: '2vh',
    width: '100%',
  }

  return (
    <div style={style}>
      <Header />
      <TodosLogic />
    </div>
  );
}
