import Image from "next/image";
import { useMediaQuery } from "@/hooks";
import SocialList from "./SocialList";
import ArrowSvg from "../ArrowSvg/ArrowSvg";
import MainTitle from "../MainTitle/MainTitle";
import styles from "./styles.module.scss";

const About = () => {
  const isMobile1080 = useMediaQuery(1080);

  return (
    <section className={styles.about} id="about">
      <div className="container">
        <MainTitle text="Обо мне" />
      </div>

      <div className={`sub-container ${styles.about__sub_container}`}>
        <div className={styles.about__wrapper}>
          <Image
            className={styles.about__wrapper__img}
            src="/img/foto.jpeg"
            alt="foto"
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
          <h3 className={styles.about__title}>
            <span className={styles.about__title__border}>
              <span className={styles.about__title__border__arrow}>
                <ArrowSvg />
              </span>

              <span className={styles.about__title__border__line} />
            </span>
          </h3>

          <div className={styles.about__text}>
            <p>
              Расположенный в Хартфорде, штат Коннектикут. В настоящее время я
              работаю по совместительству Удаленным младшим веб-разработчиком
              для Coolor, расположенного в Лас-Вегасе.
            </p>
            <p>
              Я ищу, чтобы взять на себя больше работы и повысить свои навыки в
              качестве веб-разработчика.
            </p>
          </div>

          {!isMobile1080 && <SocialList />}
        </div>
      </div>
      <div className="sub-container">{isMobile1080 && <SocialList />}</div>
    </section>
  );
};

export default About;
