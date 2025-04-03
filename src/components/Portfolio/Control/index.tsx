import { Dispatch, SetStateAction } from "react";
import ArrowSvg from "@/components/ArrowSvg/ArrowSvg";
import styles from "../styles.module.scss";

interface IPortfolioTabControl {
  id: number;
  title: string;
  portfolioTabId: number;
  setPortfolioTabId: Dispatch<SetStateAction<number>>;
}

const PortfolioTabControl = ({
  id,
  title,
  portfolioTabId,
  setPortfolioTabId,
}: IPortfolioTabControl) => {
  const isActive = id === portfolioTabId;
  const handleIsActive = isActive ? "#F2F2F2" : "#B7BFD1";

  return (
    <li className={styles.portfolio__tabs__item}>
      <button
        className={styles.portfolio__tabs__item__btn}
        onClick={() => setPortfolioTabId(id)}
      >
        <span
          className={styles.portfolio__tabs__item__btn__text}
          style={{ color: handleIsActive }}
        >
          {title}
        </span>
        {isActive && (
          <span className={styles.portfolio__tabs__item__btn__arrow}>
            <ArrowSvg />
          </span>
        )}
        <span
          className={`
            ${styles.portfolio__tabs__item__btn__border} ${
            isActive ? styles.portfolio__tabs__item__btn__border_active : ""
          }`}
        />
      </button>
    </li>
  );
};

export default PortfolioTabControl;
