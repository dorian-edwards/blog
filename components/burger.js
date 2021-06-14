import styles from './burger.module.css'
import Nav from './nav'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const burger = () => {
  const [active, setActive] = useState(false)
  const handleToggle = () => setActive(!active)
  const router = useRouter()

  // check if target is a link and if link's path is the current page
  // if so, deactive mobile nav pop-up
  // not sure if this is a hack, but before, since it didn't actually go
  // anywhere, the page didn't refresh and the nav just stayed put
  const handleLink = event => {
    const currentPage = event.target.getAttribute('href')
    if (currentPage === router.pathname) setActive(!active)
  }

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
      {active && <Nav style='mobile' handleLink={handleLink} />}
    </>
  )
}

export default burger
