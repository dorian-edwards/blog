import React, { useState } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import styles from './layout.module.css'

const Layout = ({ children }) => {
  const [active, setActive] = useState(false)
  const handleToggle = event => {
    // get target classList and convert to array
    const classList = Array.from(event.target.classList)
    // check if target is hamburger
    if (classList[0]?.startsWith('nav_burger')) {
      setActive(!active)
    }
  }

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta charSet='UTF-8' />
        <meta name='description' content='A Simple Markdown Blog build with Nextjs.' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap'
          rel='stylesheet'
        />
        <title>My Blog</title>
      </Head>
      <Nav onToggle={handleToggle} />
      <main className={styles.main_container}>{children}</main>
    </>
  )
}

export default Layout
