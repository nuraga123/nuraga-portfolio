import SocialList from "../About/SocialList";
import ArrowSvg from "../ArrowSvg/ArrowSvg";
import MainTitle from "../MainTitle/MainTitle";
import Form from "./Form";
import styles from "./styles.module.scss";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <MainTitle text="Обратная связь" />
      </div>

      <div className="sub-container">
        <div className={styles.contact__inner}>
          <div className={styles.contact__left}>
            <h3 className={styles.contact__title}>
              <span className={styles.contact__title__text}>Напиши нам</span>
              <span className={styles.contact__title__arrow}>
                <ArrowSvg />
              </span>
              <span className={styles.contact__title__border} />
            </h3>

            <Form />
          </div>

          <div className={styles.contact__right}>
            <p className={styles.contact__text}>Ваш проект — моя забота.</p>
            <p className={styles.contact__text}>
              Гарантирую качество, сроки и внимание к деталям.
            </p>
            <p className={styles.contact__text}>
              Я рядом, чтобы реализовать вашу идею в цифровом виде.
            </p>
            <p className={styles.contact__text}>
              Просто напишите — обсудим всё в деталях
            </p>
            <SocialList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
