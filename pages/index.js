import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import Project from '../components/project'

const Index = () => {
  const consoleBlogDesktop = {
    src: '/assets/images/BlogDesk.png',
    alt: 'web app screenshot desktop view',
  }

  const consoleBlogMobile = {
    src: '/assets/images/BlogMobile.png',
    alt: 'web app screenshot mobile view',
  }

  return (
    <Layout>
      <h1>Projects</h1>
      <Project
        desktop={consoleBlogDesktop}
        mobile={consoleBlogMobile}
        href='https://console-dot-blog.herokuapp.com'
      />
    </Layout>
  )
}

export default Index
