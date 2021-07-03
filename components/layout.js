import Head from 'next/head'
import Header from '../components/header'
import styles from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta charSet='UTF-8' />
        <meta name='description' content='A website about me and journey to tech...' />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/47185542?v=4?s=400" />
        <meta property="og:image:alt" content="My personal website built with NextJS!" />
        <meta property="og:site_name" content="GitHub" />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="buddafucofibas - Overview" />
        <meta property="og:url" content="https://github.com/buddafucofibas" />
        <meta property="og:description" content="My personal website built with NextJS!" />
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
