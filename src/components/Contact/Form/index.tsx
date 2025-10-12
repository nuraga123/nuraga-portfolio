import { FormEvent, useState, useRef } from "react";
import { toast } from "react-toastify";
import { PropagateLoader } from "react-spinners";
import { observer } from "mobx-react-lite";
import emailJS from "@emailjs/browser";
import { useTranslation } from "@/hooks/useTranslation";
import ContactInput from "./Input";
import styles from "./styles.module.scss";

const Form = observer(() => {
  const t = useTranslation();
  const { contact } = t;
  const {
    placeholderStartText,
    formSuccessText,
    formErrorText,
    formNameText,
    formEmailText,
    formTelText,
    formMessageText,
    formCheckboxText,
    formBtnText,
  } = contact;
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
        "HLw8oWldpeZ3uCvoa"
      );

      toast.success(`${formSuccessText} ${result.text}`);
    } catch (error) {
      toast.error(formErrorText);
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
        text={formNameText}
        placeholder={`${placeholderStartText} ${formNameText}`}
        type="text"
        name="name"
        required={true}
      />

      <ContactInput
        text={formEmailText}
        placeholder={`${placeholderStartText} ${formEmailText}`}
        type="email"
        name="email"
        required={true}
      />

      <ContactInput
        text={formTelText}
        placeholder={`${placeholderStartText} ${formTelText}`}
        type="tel"
        name="tel"
        required={false}
      />

      <ContactInput
        text={formMessageText}
        placeholder={`${placeholderStartText} ${formMessageText}`}
        type="text"
        name="message"
        isTextarea
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

        <span className={styles.form__checkbox__text}>{formCheckboxText}</span>
      </label>

      <button
        type="submit"
        className={styles.form__btn}
        disabled={disabled ? true : false}
      >
        {spinner ? <PropagateLoader color="white" /> : formBtnText}
      </button>
    </form>
  );
});

export default Form;
