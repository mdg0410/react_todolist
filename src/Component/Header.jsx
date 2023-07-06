import React from 'react'

export default function Header() {

  const styleContainer = {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    alignItems: 'center',
    padding: '3vh',
    color: 'rgba(24, 23, 23, 0.364)',
    gap: '1vh'
  }

  const h1 = {
    fontSize: '7rem',
    fontWeight: '600',
    marginBottom: '1rem',
    lineHeight: '1em',
    textAlign: 'center',
  }

  return (
    <div style={styleContainer}>
      <h1 style={h1}>todos</h1>
      <h3>Items will persist in the browser local storage</h3>
    </div>
  )
}
