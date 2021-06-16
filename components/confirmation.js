import Link from 'next/link'
import styles from './confirmation.module.css'

const Confirmation = props => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Success!</h1>
      <h2>Your message has been submitted</h2>
      <p className={styles.message}>
        Thank you for reaching out, I will respond to you as quickly as I can. Expect a mesage
        shortly at <span className={styles.returnEmail}>{props.return}</span>
      </p>
      <Link href='/'>
        <a>Return Home</a>
      </Link>
    </div>
  )
}

export default Confirmation
