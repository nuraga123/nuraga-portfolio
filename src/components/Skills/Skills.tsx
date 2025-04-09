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
          {skillsArray.length > 0 &&
            skillsArray.map(({ id, text, title, iconClass }) => (
              <li key={id} className={styles.skills__item}>
                <SkillsItem
                  title={title}
                  text={text}
                  iconClass={styles[iconClass]}
                />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
