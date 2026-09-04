type SkillProps = {
  name: string;
};

const Skill = ({ name }: SkillProps) => {
  return <li>{name}</li>;
};

export default Skill;
