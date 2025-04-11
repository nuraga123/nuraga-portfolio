import { observer } from "mobx-react-lite";
import SocialList from "../SocialList";
import ArrowSvg from "../ArrowSvg/ArrowSvg";
import MainTitle from "../MainTitle/MainTitle";
import Form from "./Form";
import { useTranslation } from "@/hooks/useTranslation";
import styles from "./styles.module.scss";

const Contact = observer(() => {
  const t = useTranslation();
  const { contact } = t;
  const { contactTitle, contactSmallTitle, contactTexts } = contact;

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <MainTitle text={contactTitle} />
      </div>

      <div className="sub-container">
        <div className={styles.contact__inner}>
          <div className={styles.contact__left}>
            <h3 className={styles.contact__title}>
              <span className={styles.contact__title__text}>
                {contactSmallTitle}
              </span>
              <span className={styles.contact__title__arrow}>
                <ArrowSvg />
              </span>
              <span className={styles.contact__title__border} />
            </h3>

            <Form />
          </div>

          <div className={styles.contact__right}>
            {contactTexts.map((text, index) => (
              <p className={styles.contact__text} key={index}>
                {text}
              </p>
            ))}
            <SocialList />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
