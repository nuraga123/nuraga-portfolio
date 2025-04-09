import MainTitle from "@/components/MainTitle/MainTitle";
import SkillsItem from "./SkillsItem";
import { skillsArray } from "./skillsArray";
import styles from "./styles.module.scss";

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className="container">
        <MainTitle text="навыки" />
      </div>
      <div className="sub-container">
        <ul className={styles.skills__list}>
          {skillsArray.map(({ text, title, iconClass }) => (
            <SkillsItem
              key={title}
              text={text}
              title={title}
              iconClass={styles[iconClass]}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
