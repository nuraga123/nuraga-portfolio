import Image from "next/image";
import styles from "./styles.module.scss";

interface IPortfolioSliderItem {
  title: string;
  imgSrc: string;
  link: string;
}

const PortfolioSliderItem = ({ title, imgSrc, link }: IPortfolioSliderItem) => (
  <div className={styles.slide}>
    <a className={styles.slide__link} href={link}>
      <span className={styles.slide__inner}>
        <span className={styles.slide__text}>{title}</span>
      </span>
      <Image
        className={styles.slide__img}
        src={imgSrc}
        alt={title}
        width={300}
        height={300}
        priority={true}
      />
    </a>
  </div>
);

export default PortfolioSliderItem;
