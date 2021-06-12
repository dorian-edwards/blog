import Link from 'next/link'
import styles from './nav.module.css'

const Nav = () => {
  return (
    <header className={styles.nav_header}>
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
      </div>
    </header>
  )
}

export default Nav
