"use client";

import { observer } from "mobx-react-lite";
import { useLanguage } from "@/hooks/useLanguage";
import styles from "./styles.module.scss";

const LanguageSwitcher = observer(() => {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <div className={styles.switcher}>
      <button
        className={styles.switcher__button}
        onClick={() => setLanguage("ru")}
        disabled={currentLanguage === "ru"}
      >
        🇷🇺
      </button>
      <button
        className={styles.switcher__button}
        onClick={() => setLanguage("en")}
        disabled={currentLanguage === "en"}
      >
        🇺🇸
      </button>
      <button
        className={styles.switcher__button}
        onClick={() => setLanguage("az")}
        disabled={currentLanguage === "az"}
      >
        🇦🇿
      </button>

      <p>
        Выбран язык: <strong>{currentLanguage.toUpperCase()}</strong>
      </p>
    </div>
  );
});

export default LanguageSwitcher;
