import styles from './burger.module.css'
import Nav from './nav'
import { useState, useEffect } from 'react'
const burger = () => {
  const [active, setActive] = useState(false)
  const handleToggle = () => setActive(!active)

  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = active ? 'hidden' : 'scroll'

    return () => (body.style.overflow = 'scroll')
  }, [active])

  return (
    <>
      <div
        className={`${styles.burger_wrapper} ${active ? styles.active : ''}`}
        onClick={handleToggle}
      >
        <div className={styles.burger}></div>
      </div>
      {active && <Nav style='mobile' />}
    </>
  )
}

export default burger
