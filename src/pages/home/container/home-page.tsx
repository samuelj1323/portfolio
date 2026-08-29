import styles from "./home.module.css";
import useTypedNavigate from "$hooks/useTypedNavigate";
import { skills } from "$utils/constants";
import { projects } from "$utils/projects";
import Skill from "$components/skill/Skill";
import Project from "$components/project/Project";
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
        <h4>Skills</h4>
        {(
          Object.entries(skills) as [keyof typeof skills, readonly string[]][]
        ).map(([category, items]) => (
          <div key={category}>
            <h3>{category}</h3>
            <ul>
              {items.map((skill) => (
                <Skill key={skill} name={skill} />
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section id="projects">
        <h4>Projects</h4>
        <ul>
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
