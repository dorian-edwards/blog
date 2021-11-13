import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import Project from '../components/project'

import {
  consoleBlogDesktop,
  consoleBlogMobile,
  blogDesc,
  bloghref,
} from '../projects/console.blog'

import {
  googleDesktop,
  googleMobile,
  googleDesc,
  googlehref,
} from '../projects/google'

import {
  etchDesk,
  etchMobile,
  etchDesc,
  etchhref,
} from '../projects/etch-a-sketch'

const Index = () => {
  return (
    <Layout>
      <h1>
        <a
          href='https://github.com/buddafucofibas?tab=repositories'
          target='__blank'
        >
          Projects
        </a>
      </h1>
      <Project
        desktop={consoleBlogDesktop}
        mobile={consoleBlogMobile}
        desc={blogDesc}
        href={bloghref}
      />
      <Project
        desktop={googleDesktop}
        mobile={googleMobile}
        desc={googleDesc}
        href={googlehref}
      />
      <Project
        desktop={etchDesk}
        mobile={etchMobile}
        desc={etchDesc}
        href={etchhref}
      />
    </Layout>
  )
}

export default Index
