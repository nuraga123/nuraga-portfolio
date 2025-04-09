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
            <p className={styles.contact__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, quas.
            </p>

            <p className={styles.contact__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, quas.
            </p>

            <SocialList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
