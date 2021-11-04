import styles from './project.module.css'

const Project = ({ mobile, desktop, href }) => (
  <a href={href} target='__blank'>
    <div className={styles.project_card}>
      <div className={styles.img_wrapper}>
        <div className={styles.desk}>
          <img src={desktop.src} alt={desktop.alt} />
        </div>
        <div className={styles.mobile}>
          <img src={mobile.src} alt={mobile.alt} />
        </div>
      </div>
      <div className={styles.description}>
        <div>
          Blog web application built with React, React-Router, NodeJS/Express
          and MongoDB. This is my first full-stack application!
        </div>
        <div>
          I went with a mobile first design approach and achieved responsiveness
          with a combination of conditional rendering and media queries.
        </div>
        <div>
          I wrote the backend API with the intention of fully rendering the
          application on client side. I utilize custom error handling and follow
          the JSend specification for serving responses.
        </div>
        <div>
          I also use JSON Web Tokens and HTTP only cookies for security to
          maintain a fully stateless application
        </div>
      </div>
    </div>
  </a>
)

export default Project
