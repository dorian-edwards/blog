import React from 'react'
import matter from 'gray-matter'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from './index.module.css'

// explicit extraction of object properties
const PostIndex = ({ data }) => {
  const parsedData = data.map(item => matter(item))
  const metaData = parsedData.map(item => item.data)

  return (
    <Layout>
      <div className={styles.posts_wrapper}>
        <h1>Blog Posts</h1>
        <div className={styles.post_list}>
          <ul>
            {metaData.map((entry, index) => {
              return (
                <li key={index}>
                  <Link href={`/posts/${entry.slug}`}>
                    <a>
                      <div className={styles.title}>{entry.title}</div>
                      <div className={styles.date}>
                        <time dateTime={entry.date}>{entry.date}</time>
                      </div>
                      <div className={styles.description}>{entry.description}</div>
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default PostIndex

export async function getStaticProps() {
  const siteData = await import('../../config.json')
  const fs = require('fs')

  const files = fs.readdirSync(`${process.cwd()}/content`, 'utf-8')
  const markdown = files.filter(file => file.endsWith('.md'))

  const data = markdown.map(file => {
    const path = `${process.cwd()}/content/${file}`
    const rawData = fs.readFileSync(path, 'utf-8')
    return rawData // rawData is our two markdown files in one long string
  })

  return {
    props: {
      data: data,
    },
  }
}
