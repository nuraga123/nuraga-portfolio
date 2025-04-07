import styles from "../styles.module.scss";

interface IInputProps {
  type: string;
  text: string;
  placeholder: string;
  name: string;
}

const ContactInput = ({ type, text, placeholder, name }: IInputProps) => {
  return (
    <label htmlFor="name" className={styles.form__label}>
      <span className={styles.form__label__text}>{text}</span>

      <input
        type={type}
        name={name}
        className={styles.form__label__input}
        placeholder={placeholder}
      />
    </label>
  );
};

export default ContactInput;
