import styles from "../styles.module.scss";

interface ISkillsItem {
  text: string[];
  title: string;
  iconClass: string;
}

const SkillsItem = ({ text, title, iconClass }: ISkillsItem) => {
  return (
    <>
      <h3 className={`${styles.skills__title} ${iconClass}`}>
        <span className={styles.skills__title__text}>{title}</span>
        <span className={styles.skills__title__border} />
      </h3>
      <ul className={styles.skills__item__list}>
        {text.length > 0 &&
          text.map((item, index) => (
            <li
              className={styles.skills__text}
              key={index}
            >
              {item}
            </li>
          ))}
      </ul>
    </>
  );
};

export default SkillsItem;
