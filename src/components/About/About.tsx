import Image from "next/image";
import { observer } from "mobx-react-lite";
import MainTitle from "../MainTitle/MainTitle";
import { useTranslation } from "@/hooks/useTranslation";
import styles from "./styles.module.scss";

const About = observer(() => {
  const t = useTranslation();
  const { about } = t;
  const {
    aboutTitle,
    aboutBooksList,
    aboutProjectsList,
    aboutExperienceList,
    aboutConclusion,
    aboutBooksTitle,
    aboutExperienceTitle,
    aboutIntro,
    aboutIntroTitle,
    aboutProjectsTitle,
  } = about;

  return (
    <section className={styles.about} id="about">
      <div className="container">
        <MainTitle text={aboutTitle} />
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
                {aboutIntroTitle}
                <br />
                <span className={styles.about__title__border__line} />
                <br />
                {aboutIntro}
              </p>
            </section>

            <section className={styles.about__text__sectionBooks}>
              <p className={styles.about__text__p}>
                <span className={styles.about__text__emoji}>📚</span>
                {aboutBooksTitle}
                <br />
                <span className={styles.about__title__border__line} />
              </p>

              <ul className={styles.about__text__ul}>
                {aboutBooksList.map((text) => (
                  <li className={styles.about__text__li} key={text}>
                    <span className={styles.about__text__highlight}>
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className={styles.about__text__sectionProjects}>
              <p className={styles.about__text__p}>
                <span className={styles.about__text__emoji}>💻</span>
                {aboutProjectsTitle}
                <br />
                <span className={styles.about__title__border__line} />
              </p>

              <ul className={styles.about__text__ul}>
                {aboutProjectsList.map((text) => (
                  <li className={styles.about__text__li} key={text}>
                    {text}
                  </li>
                ))}
              </ul>
            </section>

            <section className={styles.about__text__sectionExperience}>
              <p className={styles.about__text__p}>
                <span className={styles.about__text__emoji}>💡</span>
                {aboutExperienceTitle}
                <br />
                <span className={styles.about__title__border__line} />
              </p>

              <ul className={styles.about__text__ul}>
                {aboutExperienceList.map((text) => (
                  <li className={styles.about__text__li} key={text}>
                    {text}
                  </li>
                ))}
              </ul>
            </section>

            <section className={styles.about__text__sectionConclusion}>
              <p className={styles.about__text__p}>
                {`${aboutConclusion.split(".")[0]}. `}

                <br />
                {aboutConclusion.split(".")[1]}
                <span className={styles.about__title__border__line} />
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
