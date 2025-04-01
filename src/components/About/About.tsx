import Image from "next/image";
import MainTitle from "../MainTitle/MainTitle";
import styles from "./styles.module.scss";
import ArrowSvg from "../ArrowSvg/ArrowSvg";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <MainTitle text="Обо мне" />
      </div>
      <div className={`sub-container ${styles.about__sub_container}`}>
        <Image
          className={styles.about__img}
          src={"/img/foto.jpeg"}
          alt="foto"
          width={120}
          height={120}
          property=""
        />
        <div className={styles.about__inner}>
          <h3 className={styles.about__title}>
            <span className={styles.about__title__border}>
              <span className={styles.about__title__border__arrow}>
                <ArrowSvg />
              </span>

              <span className={styles.about__title__border__line} />
            </span>
          </h3>

          <p  className={styles.about__text}>
            
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
