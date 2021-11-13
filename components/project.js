import styles from "./project.module.css";

const Project = ({ mobile, desktop, desc, href }) => (
  <a href={href} target="__blank">
    <div className={styles.project_card}>
      <div className={styles.img_wrapper}>
        <div className={styles.desk}>
          <img src={desktop.src} alt={desktop.alt} />
        </div>
        <div className={styles.mobile}>
          <img src={mobile.src} alt={mobile.alt} />
        </div>
      </div>
      <div className={styles.description}>{desc}</div>
    </div>
  </a>
);

export default Project;
