import React from 'react'
import styles from '../Styles/Header.module.css'

export default function Header() {

  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };




  return (
    <header style={headerStyle} className={styles.header}>
      <h1 >todos</h1>
      <h3>Items will persist in the browser local storage</h3>
    </header>
  )
}
