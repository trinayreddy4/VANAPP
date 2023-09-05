import React from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <header className={styles.container}>
        <div className={styles.logo}>
            <Link to='/'>#VANLIFE</Link>
        </div>
        <div className={styles.menu}>
            <div>
                <Link to='/About'>About</Link>
            </div>
            <div>
                <Link>Vans</Link>
            </div>
        </div>
    </header>
  )
}

export default NavBar
