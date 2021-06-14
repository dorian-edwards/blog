import React, { useState } from 'react'
import Link from 'next/link'
import styles from './nav.module.css'
import getHTML from '../utilities/getHTML'

const Nav = props => {
  const [active, setActive] = useState(false)
  const handleToggle = event => {
    let html = getHTML(event.target)
    // get target classList and convert to array
    const classList = Array.from(event.target.classList)
    // check if target is hamburger
    if (classList[0]?.startsWith('nav_burger')) {
      setActive(!active)
      html.classList.toggle('pause')
    }

    if (event.target.tagName === 'A' && active) {
      setActive(!active)
      html.classList.toggle('pause')
    }
  }

  return (
    <header
      className={`${styles.nav_header} ${active ? styles.active : ''}`}
      onClick={handleToggle}
    >
      <div>
        <nav>
          <ul>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/posts'>
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a>contact</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.burger_wrapper}>
          <div className={styles.burger}></div>
        </div>
      </div>
    </header>
  )
}

export default Nav
