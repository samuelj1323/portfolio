import ResumeItem from "$components/resume-item/resume-item";
import { resume } from "$utils/resume";
const ResumePage = () => {
  return (
    <div>
      <h3>Resume Page</h3>
      <div id="resume-mapping">
        {resume.map((item, idx) => (
          <ResumeItem key={`{item.type}-${idx}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ResumePage;
