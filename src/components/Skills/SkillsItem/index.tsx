import { Key } from "react";
import styles from "../styles.module.scss";

interface ISkillsItem {
  key: Key;
  text: string;
  title: string;
  iconClass: string;
}

const SkillsItem = ({ key, text, title, iconClass }: ISkillsItem) => {
  return (
    <li key={key} className={styles.skills__item}>
      <h3 className={`${styles.skills__title} ${iconClass}`}>
        <span className={styles.skills__title__text}>{title}</span>
        <span className={styles.skills__title__border} />
      </h3>
      <p className={styles.skills__text}>{text}</p>
    </li>
  );
};

export default SkillsItem;
