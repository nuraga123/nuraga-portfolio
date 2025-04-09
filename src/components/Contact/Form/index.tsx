import { FormEvent, useState, useRef } from "react";
import emailJS from "@emailjs/browser";
import { toast } from "react-toastify";
import { PropagateLoader } from "react-spinners";
import ContactInput from "./Input";
import styles from "./styles.module.scss";

const Form = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [spinner, setSpinner] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setSpinner(true);
      const result = await emailJS.sendForm(
        "service_r4cs4ki",
        "template_wbq8mmw",
        formRef.current as HTMLFormElement,
        "HLw8oWldpeZ3uCvo"
      );

      toast.success(`данные отправлены ${result.text}`);
    } catch (error) {
      toast.error("не удалось");
      console.log(error);
    } finally {
      setSpinner(false);
      formRef.current?.reset();
      setDisabled(true);
    }
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
        placeholder="Укажите телефон (не обязательно)"
        type="tel"
        name="tel"
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
