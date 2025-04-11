"use client";
import Image from "next/image";
import { socialLinks } from "./socialLinks";
import styles from "./styles.module.scss";
import { CopyBtn } from "@/components/CopyBtn";

const SocialList = () => {
  return (
    <ul className={styles.social__list}>
      {socialLinks.map(({ text, src, link, target }) => (
        <li key={text} className={styles.social__list__item}>
          <a
            href={link}
            target={target}
            rel="noopener noreferrer"
            className={styles.social__list__item__link}
          >
            <span className={styles.social__list__item__link__icon}>
              <Image src={src} alt={text} width={48} height={48} priority />
            </span>

            <span className={styles.social__list__item__link__text}>
              {text}
            </span>
          </a>

          <span>
            <CopyBtn text={text} />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
