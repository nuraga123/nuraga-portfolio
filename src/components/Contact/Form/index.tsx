import { FormEvent, useState, useRef, MutableRefObject } from "react";
import emailJS from "@emailjs/browser";
import ContactInput from "./Input";
import styles from "./styles.module.scss";
import { toast } from "react-toastify";
import { PropagateLoader } from "react-spinners";

const Form = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [spinner, setSpinner] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSpinner(true);

    emailJS

      .sendForm(
        "service_r4cs4ki",
        "template_wbq8mmw",
        formRef.current as HTMLFormElement,
        "HLw8oWldpeZ3uCvoa"
      )
      .then((res) => {
        spinner;
        toast.success(`данные отправлены ${res.text}`);
      })
      .catch((err) => {
        toast.error("не удалось");
        console.log(err);
      });
  };

  return (
    <form className={styles.form} onSubmit={sendEmail} ref={formRef}>
      <ContactInput
        text="Ф.И.О. *"
        placeholder="Укажите Ф.И.О. *"
        type="text"
        name="name"
        required={true}
      />

      <ContactInput
        text="E-mail *"
        placeholder="Укажите E-mail *"
        type="email"
        name="email"
        required={true}
      />

      <ContactInput
        text="Телефон "
        placeholder="Укажите телефон *"
        type="tel"
        name="phone"
        required={false}
      />

      <ContactInput
        text="сообщение"
        placeholder="Укажите сообщение *"
        type="text"
        name="message"
        required={true}
      />

      <label className={styles.form__checkbox}>
        <input
          type="checkbox"
          className={styles.form__checkbox__input}
          checked={!disabled}
          onChange={() => setDisabled((prev) => !prev)}
        />

        <span className={styles.form__checkbox__span} />

        <span className={styles.form__checkbox__text}>
          я согласен с правилами
        </span>
      </label>

      <button
        type="submit"
        className={styles.form__btn}
        disabled={disabled ? true : false}
      >
        {spinner ? <PropagateLoader color="white" /> : "Отправить"}
      </button>
    </form>
  );
};

export default Form;
