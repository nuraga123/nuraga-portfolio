import { useState } from "react";
import ContactInput from "./Input";
import styles from "./styles.module.scss";

const Form = () => {
  const [acceptWithRules, setAcceptWithRules] = useState<boolean>(false);

  const toggle = () => setAcceptWithRules(!acceptWithRules);

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e);
      }}
    >
      <ContactInput
        text="Ф.И.О. *"
        placeholder="Укажите Ф.И.О. *"
        type="text"
        name="fullname"
      />

      <ContactInput
        text="Должность/компания"
        placeholder="Укажите должность/компанию"
        type="text"
        name="company"
      />

      <ContactInput
        text="E-mail *"
        placeholder="Укажите E-mail *"
        type="email"
        name="email"
      />

      <ContactInput
        text="Телефон *"
        placeholder="Укажите телефон *"
        type="tel"
        name="phone"
      />

      <label className={styles.form__checkbox}>
        <input type="checkbox" className={styles.form__checkbox__input} />
        <span className={styles.form__checkbox__span} onClick={toggle} />
        <span className={styles.form__checkbox__text}>я согласен</span>
      </label>

      <button
        type="submit"
        className={styles.form__btn}
        disabled={!acceptWithRules}
      >
        Отправить
      </button>
    </form>
  );
};

export default Form;
