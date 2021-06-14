import React, { useState, useEffect } from 'react'
import styles from './header.module.css'
import getHTML from '../utilities/getHTML'
import Nav from './nav'
import Burger from './burger'

const getWidth = () => {}

const Header = props => {
  const [width, setWidth] = useState(0)
  const handleResize = () => setWidth(window.innerWidth)
  const breakpoint = 440

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <header className={styles.header}>{width > breakpoint ? <Nav /> : <Burger />}</header>
}

export default Header
