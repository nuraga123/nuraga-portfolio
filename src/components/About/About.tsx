import Image from "next/image";
import { observer } from "mobx-react-lite";
import MainTitle from "../MainTitle/MainTitle";
import { useTranslation } from "@/hooks/useTranslation";
import styles from "./styles.module.scss";

const About = observer(() => {
  const t = useTranslation();

  return (
    <section className={styles.about} id="about">
      <div className="container">
        <MainTitle text={t.aboutTitle} />
      </div>

      <div className={`sub-container ${styles.about__sub_container}`}>
        <div className={styles.about__wrapper}>
          <Image
            className={styles.about__wrapper__img}
            src="/img/foto.jpeg"
            alt="Юсифли Нурага"
            width={300}
            height={300}
          />
          <svg className={styles.about__wrapper__border} viewBox="0 0 300 300">
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              fill="none"
              stroke="#00d1ff"
              strokeWidth="4"
              strokeDasharray="30, 30"
              strokeLinecap="round"
              transform="rotate(-90 150 150)"
            />
          </svg>
        </div>

        <div className={styles.about__inner}>
          <div className={styles.about__text}>
            <section className={styles.about__text__sectionIntro}>
              <p className={styles.about__text__p}>
                {t.aboutIntroTitle}
                Я Full-Stack разработчик с опытом создания веб-приложений и
                пользовательских интерфейсов.
                <br />
                <span className={styles.about__title__border__line} />
                <br />
                {t.aboutIntro}
                Постоянно развиваюсь, изучаю современные технологии, читаю книги
                и смотрю видео-курсы, которые помогают глубже понять принципы
                работы технологий на реальных примерах.
              </p>
            </section>

            <section className={styles.about__text__sectionBooks}>
              <p className={styles.about__text__p}>
                <span className={styles.about__text__emoji}>📚</span>
                Книги, которые внесли вклад в мой профессиональный рост:
                <br />
                <span className={styles.about__title__border__line} />
              </p>

              <ul className={styles.about__text__ul}>
                <li className={styles.about__text__li}>
                  <span className={styles.about__text__highlight}>
                    &quot;Выразительный JavaScript&quot;
                  </span>
                  – Marijn Haverbeke
                </li>
                <li className={styles.about__text__li}>
                  <span className={styles.about__text__highlight}>
                    &quot;Совершенный код&quot;
                  </span>
                  – Steve McConnell
                </li>
                <li className={styles.about__text__li}>
                  <span className={styles.about__text__highlight}>
                    &quot;Чистый код&quot;
                  </span>
                  – Robert C. Martin
                </li>
              </ul>
            </section>

            <section className={styles.about__text__sectionProjects}>
              <p className={styles.about__text__p}>
                <span className={styles.about__text__emoji}>💻</span>
                Активно применяю знания на практике, разрабатывая лэндинги и
                веб-приложения.
                <br />
                Среди моих проектов:
                <span className={styles.about__title__border__line} />
              </p>

              <ul className={styles.about__text__ul}>
                <li className={styles.about__text__li}>Интернет-магазины</li>
                <li className={styles.about__text__li}>
                  Сайты-визитки и рекламные страницы
                </li>
                <li className={styles.about__text__li}>
                  Утилиты для медицинской фирмы
                </li>
                <li className={styles.about__text__li}>
                  Аналог 1С для управления складом и учетной системой
                </li>
                <li className={styles.about__text__li}>
                  Индивидуальные амбарные сайты для компаний
                </li>
              </ul>
            </section>

            <section className={styles.about__text__sectionExperience}>
              <p className={styles.about__text__p}>
                <span className={styles.about__text__emoji}>💡</span>
                Опыт работы с функционалом:
                <br />
                <span className={styles.about__title__border__line} />
              </p>

              <ul className={styles.about__text__ul}>
                <li className={styles.about__text__li}>
                  Аутентификация пользователей через JWT token
                </li>
                <li className={styles.about__text__li}>
                  Хеширование паролей и безопасное хранение данных
                </li>
                <li className={styles.about__text__li}>
                  {`Логика учета материалов (приход, расход, создание, удаление)`}
                </li>
                <li className={styles.about__text__li}>
                  {`Создание удобных UI/UX интерфейсов (интерактивные элементы, интеграция с другими сайтами)`}
                </li>
                <li className={styles.about__text__li}>
                  {`Архив операций пользователя (например, удаленный товар остается в истории)`}
                </li>
              </ul>
            </section>

            <section className={styles.about__text__sectionConclusion}>
              <p className={styles.about__text__p}>
                Всегда стремлюсь писать чистый, поддерживаемый код, соблюдать
                лучшие практики и исследовать новые технологии.
                <br />
                Открыт к интересным проектам и сложным задачам! 🚀
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
