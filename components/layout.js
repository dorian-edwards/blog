import Head from 'next/head'
import Header from '../components/header'
import styles from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta charSet='UTF-8' />
        <meta name='author' content='dorian edwards' />
        <meta
          name='description'
          content='A website about me and journey to tech...'
        />
        <meta property='og:image' content='/assets/images/homepage.png' />
        <meta property='og:image:alt' content='Home page of blog site.' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='PharmDTechie.net' />
        <meta property='og:url' content='https://pharmdtechie.net' />
        <meta
          property='og:description'
          content='My personal website built with NextJS!'
        />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap'
          rel='stylesheet'
        />
        <title>My Blog</title>
      </Head>
      <Header />
      <main className={styles.main_container}>{children}</main>
    </>
  )
}

export default Layout
