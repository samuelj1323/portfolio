import styles from "./home.module.css";
import useTypedNavigate from "$hooks/useTypedNavigate";
import { skills } from "$utils/constants";
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
      <section id="skills">
        {(Object.entries(skills) as [keyof typeof skills, readonly string[]][]).map(
          ([category, items]) => (
            <div key={category}>
              <h3>{category}</h3>
              <ul>
                {items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ),
        )}
      </section>
      <section id="projects"></section>
    </div>
  );
};

export default HomePage;
