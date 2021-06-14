import Head from 'next/head'
import Nav from '../components/nav'
import styles from './layout.module.css'

const Layout = ({ children }) => {
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
      <Nav />
      <main className={styles.main_container}>{children}</main>
    </>
  )
}

export default Layout
