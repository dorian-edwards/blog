import Layout from '../components/layout'
import Confirmation from '../components/confirmation'
import { useEffect, useState } from 'react'
import styles from './contact.module.css'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [returnEmail, setReturnEmail] = useState()

  useEffect(() => {}, [submitted])

  const handleSubmit = async e => {
    e.preventDefault()
    const data = { name, email, message }

    const resRaw = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const res = await resRaw.json()

    console.log(res)

    if (resRaw.status === 200) {
      setSubmitted(true)
      setReturnEmail(res.envelope.from)
    }
  }

  return (
    <Layout>
      {submitted ? (
        <Confirmation return={returnEmail} />
      ) : (
        <div>
          <h1 className={styles['contact-title']}>Contact Me</h1>
          <form onSubmit={handleSubmit} className={styles['contact-form']}>
            <div className={styles['contact-info']}>
              <input
                type='text'
                name='name'
                id='name'
                className={name && styles.filled}
                required
                onChange={e => setName(e.target.value)}
              />
              <label htmlFor='name'>Name</label>
            </div>
            <div className={styles['contact-info']}>
              <input
                type='email'
                name='email'
                id='email'
                className={email && styles.filled}
                required
                onChange={e => setEmail(e.target.value)}
              />
              <label htmlFor='email'>Email Address</label>
            </div>
            <div className={styles['contact-info']}>
              <textarea
                name='message'
                id='message'
                className={message && styles.filled}
                required
                cols='30'
                rows='10'
                onChange={e => setMessage(e.target.value)}
              />
              <label htmlFor='message'>Message</label>
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      )}
    </Layout>
  )
}

export default Contact
