import styles from "./home.module.css";
import useTypedNavigate from "$hooks/useTypedNavigate";
const HomePage = () => {
  const nav = useTypedNavigate();

  const handleConnectClick = () => {
    nav("/resume");
  };
  return (
    <div className={styles.container}>
      <section id="hero">
        <h2>Samuel Mahan</h2>
        <p>Frontend leaning Full Stack developer</p>
        <button onClick={handleConnectClick}>Connect with me</button>
      </section>
      <section id="skills"></section>
      <section id="projects"></section>
    </div>
  );
};

export default HomePage;
