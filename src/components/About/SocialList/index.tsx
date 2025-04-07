"use client";
import Image from "next/image";
import styles from "./styles.module.scss";

const socialLinks = [
  {
    title: "phone",
    text: "+994 (50) 341-67-36",
    src: "/img/phone.svg",
    iconClass: "ph",
    link: "tel:+994503416736",
    target: "_self",
  },
  {
    title: "E-mail",
    text: "nuragayusifli@gmail.com",
    src: "/img/email.svg",
    iconClass: "em",
    link: "mailto:nuragayusifli@gmail.com",
    target: "_self",
  },
  {
    title: "Telegram",
    text: "Nuraga2000",
    src: "/img/telegram.svg",
    iconClass: "tt",
    link: "https://t.me/Nuraga2000",
    target: "_blank",
  },
  {
    title: "VK",
    text: "Nuraga Yusifli",
    src: "/img/vk.svg",
    iconClass: "vk",
    link: "https://vk.com/naruto__baku",
    target: "_blank",
  },
];

const SocialList = ({ isFlexColumn = false }: { isFlexColumn?: boolean }) => {
  return (
    <ul
      className={`${styles.social__list} ${
        isFlexColumn ? styles.isFlexColumn : ""
      }`}
    >
      {socialLinks.map(({ text, src, iconClass, link, target, title }) => (
        <li key={text} className={styles.social__list__item}>
          <a
            href={link}
            target={target}
            rel="noopener noreferrer"
            className={styles.social__list__item__link}
          >
            <span
              className={`
                ${styles.social__list__item__link__icon} 
                ${styles[`social__list__item__link__icon__${iconClass}`]}
              `}
            >
              <Image
                className={styles.social__list__item__link__img}
                src={src}
                alt={text}
                width={24}
                height={24}
                priority
              />
            </span>

            <span
              className={`${styles.social__list__item__link__text} ${
                isFlexColumn ? styles.isFlexColumn__span : ""
              }`}
            >
              {`${title}: ${text}`}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
