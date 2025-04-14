import { observer } from "mobx-react-lite";
import { skillsArray } from "./skillsArray";
import MainTitle from "@/components/MainTitle/MainTitle";
import { useTranslation } from "@/hooks/useTranslation";
import SkillsItem from "./SkillsItem";
import styles from "./styles.module.scss";

const Skills = observer(() => {
  const t = useTranslation();
  const { skills } = t;
  const { skillsTitle, algorithmsTitle, algorithmsText1, algorithmsText2 } =
    skills;

  return (
    <section className={styles.skills} id="skills">
      <div className="container">
        <MainTitle text={skillsTitle} />
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
        <div className={styles.skills__item}>
          <SkillsItem
            title={algorithmsTitle}
            text={[algorithmsText1, algorithmsText2]}
            iconClass={styles.skills__seo}
          />
        </div>
      </div>
    </section>
  );
});

export default Skills;
