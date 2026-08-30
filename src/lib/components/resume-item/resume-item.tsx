import { useMemo, Fragment } from "react";
import type {
  ResumeItem as IResumeItem,
  ProjectItem as IProjectItem,
  CompanyItem as ICompanyItem,
  EducationItem as IEducatioItem,
} from "$utils/types";

const ProjectItem = ({ item }: { item: IProjectItem }) => {
  const date = useMemo(() => item.date.toLocaleDateString(), []);
  return (
    <div>
      <h6>{item.projectName}</h6>
      <p>{date}</p>
      {item.points.map((point) => (
        <Fragment key={point}>
          <p>{point}</p>
          <br />
        </Fragment>
      ))}
      {item.tags.map((point) => (
        <span key={point}>
          <p>{point}</p>
        </span>
      ))}
    </div>
  );
};
const CompanyItem = ({ item }: { item: ICompanyItem }) => {
  return (
    <div>
      <h6>{item.companyName}</h6>
      <div>
        {item.experience.map((role, idx) => (
          <div key={`${role.jobTitle}-${idx}`}>
            <p>
              {role.jobTitle}, {role.startDate.toLocaleDateString()}-
              {role?.endDate ? role.endDate.toLocaleDateString() : "current"}
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
    <div>
      <h6>{item.schoolName}</h6>
      <p>{item.location}</p>
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
