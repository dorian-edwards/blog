import Link from 'next/link'
import styles from './nav.module.css'

const Nav = props => {
  return (
    <nav className={`${styles.navbar} ${styles[props.style]}`}>
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
  )
}

export default Nav
