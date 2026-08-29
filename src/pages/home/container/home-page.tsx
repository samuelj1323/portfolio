import styles from "./home.module.css"
const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.header}>Samuel Mahan</h1>
      </div>
      <h2>Welcome to the home page.</h2>
    </div>

  )

};

export default HomePage;
