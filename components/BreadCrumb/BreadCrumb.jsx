import styles from "./BreadCrumb.module.css";

const BreadCrumb = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span>Nouveauté Mode Homme</span>
        <span>401 Articles</span>
      </div>
    </div>
  );
};

export default BreadCrumb;
