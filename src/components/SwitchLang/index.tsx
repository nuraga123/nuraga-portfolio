import { useState, useRef, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { languageStore } from "@/store/LanguageStore";
import { Language } from "@/locales";

import styles from "./styles.module.scss";

const languages: { code: Language; label: string }[] = [
  { code: "RU", label: "Русский" },
  { code: "EN", label: "English" },
  { code: "AZ", label: "Azərbaycan" },
];

const SwitchLang = observer(() => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLang = languageStore.language;
  const availableLangs = languages.filter((lang) => lang.code !== currentLang);
  const currentLangData = languages.find((l) => l.code === currentLang);

  const toggleOpen = () => setOpen((prev) => !prev);

  const handleSelect = (langCode: Language) => {
    languageStore.setLanguage(langCode);
    localStorage.setItem("language", langCode);
    setOpen(false);
  };

  // 🔥 Загрузка языка из localStorage
  useEffect(() => {
    languageStore.initLanguageFromLocalStorage();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const currentTarget = event.target as Node;

      if (ref.current && !ref.current.contains(currentTarget)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.langSwitcher} ref={ref}>
      <button onClick={toggleOpen} className={styles.current}>
        <span className={styles.label}>{currentLangData?.code}</span>
      </button>

      <div className={`${styles.dropdown} ${open ? styles.open : ""}`}>
        {availableLangs.map(({ code, label }) => (
          <button
            key={code}
            onClick={() => handleSelect(code)}
            className={styles.option}
          >
            <span className={styles.label}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
});

export default SwitchLang;
