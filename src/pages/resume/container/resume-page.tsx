import ResumeItem from "$components/resume-item/resume-item";
import { resume } from "$utils/resume";
import styles from "./resume-page.module.css";

const ResumePage = () => {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h3>Resume</h3>
        <p>Experience &amp; education — impact over responsibilities.</p>
      </header>
      <div className={styles.list}>
        {resume.map((item, idx) => (
          <ResumeItem key={`${item.type}-${idx}`} item={item} />
        ))}
      </div>
    </main>
  );
};

export default ResumePage;
