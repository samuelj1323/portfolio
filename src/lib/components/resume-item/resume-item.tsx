import { useMemo } from "react";
import type {
  ResumeItem as IResumeItem,
  ProjectItem as IProjectItem,
  CompanyItem as ICompanyItem,
  EducationItem as IEducatioItem,
} from "$utils/types";
import styles from "./resumeItem.module.css";

const ProjectItem = ({ item }: { item: IProjectItem }) => {
  const date = useMemo(
    () => item.date.toLocaleDateString(undefined, { year: "numeric", month: "short" }),
    [item.date],
  );
  return (
    <div className={styles.block}>
      <h6>{item.projectName}</h6>
      <p className={styles.meta}>{date} — Featured Project</p>
      <div className={styles.points}>
        {item.points.map((point) => (
          <p key={point}>{point}</p>
        ))}
      </div>
      <div className={styles.tags}>
        {item.tags.map((point) => (
          <span key={point}>{point}</span>
        ))}
      </div>
    </div>
  );
};
const CompanyItem = ({ item }: { item: ICompanyItem }) => {
  const fmt = (d: Date) => d.toLocaleDateString(undefined, { year: "numeric", month: "short" });
  return (
    <div className={styles.block}>
      <h6>{item.companyName}</h6>
      <p className={styles.meta}>Experience</p>
      <div>
        {item.experience.map((role, idx) => (
          <div key={`${role.jobTitle}-${idx}`} className={styles.role}>
            <p className={styles.roleTitle}>{role.jobTitle}</p>
            <p className={styles.roleDate}>
              {fmt(role.startDate)} — {role.endDate ? fmt(role.endDate) : "Present"}
            </p>
            <ul>
              {role.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
const EducationItem = ({ item }: { item: IEducatioItem }) => {
  return (
    <div className={`${styles.block} ${styles.edu}`}>
      <h6>{item.schoolName}</h6>
      <p className={styles.meta}>{item.location}</p>
      <p>{item.degree}</p>
    </div>
  );
};

const ResumeItem = ({ item }: { item: IResumeItem }) => {
  const { type } = item;
  switch (type) {
    case "project":
      return <ProjectItem item={item} />;
    case "education":
      return <EducationItem item={item} />;
    case "company":
      return <CompanyItem item={item} />;
  }
};
export default ResumeItem;
