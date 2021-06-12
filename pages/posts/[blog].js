import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'
import vsDarkPlus from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus'
import Layout from '../../components/layout'
import styles from './blog.module.css'

SyntaxHighlighter.registerLanguage('javascript', javascript)
SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('bash', bash)

const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        style={vsDarkPlus}
        language={match[1]}
        PreTag='div'
        children={String(children).replace(/\n$/, '')}
        {...props}
      />
    ) : (
      <code className={className} {...props} />
    )
  },
}

const Blog = ({ data, content }) => {
  return (
    <Layout>
      <div className={styles.blog_wrapper}>
        <div className={styles.blog_heading}>
          <h1>{data.title}</h1>
          <div className={styles.time}>
            <time dateTime={data.date}>{data.date}</time>
          </div>
          <hr />
        </div>
        <div className={styles.blog_body}>
          <ReactMarkdown children={content} components={components} />
        </div>
      </div>
    </Layout>
  )
}

export default Blog

Blog.getInitialProps = async context => {
  const { blog } = context.query
  const content = await import(`../../content/${blog}.md`)
  const data = matter(content.default)
  return { ...data }
}
