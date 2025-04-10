import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MainTitle from "../MainTitle/MainTitle";
import { hiddenPortfolioItemsArray, portfolioItems } from "./Contents";
import PortfolioTabContent from "./Content";
import PortfolioTabControl from "./Control";
import PortfolioSlider from "./Slider/Slider";
import { useMediaQuery } from "@/hooks/useWindowWidth";

import styles from "./styles.module.scss";

const Portfolio = () => {
  const isMobile = useMediaQuery(1080);

  const [portfolioTabId, setPortfolioTabId] = useState<number>(1);
  const currentPortfolioItems = portfolioItems[portfolioTabId - 1];

  const [hiddenPortfolioItems, setHiddenPortfolioItems] = useState(false);

  const toggleHiddenPortfolioItems = () =>
    setHiddenPortfolioItems(!hiddenPortfolioItems);

  const portfolioTabControls = [
    {
      id: 1,
      title: "Веб-сайты",
    },
    {
      id: 2,
      title: "UI/UX дизайн",
    },
    {
      id: 3,
      title: "Внешний интерфейс",
    },
    {
      id: 4,
      title: "Все проекты",
    },
  ];

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className="container">
        <MainTitle text="портфолио" />
      </div>
      <div className="sub-container">
        <div className={styles.portfolio__inner}>
          <ul className={styles.portfolio__tabs}>
            {portfolioTabControls.map((item) => (
              <PortfolioTabControl
                key={item.id}
                id={item.id}
                title={item.title}
                portfolioTabId={portfolioTabId}
                setPortfolioTabId={setPortfolioTabId}
              />
            ))}
          </ul>
        </div>

        {!isMobile && (
          <ul className={styles.portfolio__list}>
            {currentPortfolioItems && (
              <PortfolioTabContent tabItems={currentPortfolioItems} />
            )}
            <AnimatePresence>
              {hiddenPortfolioItems && (
                <PortfolioTabContent tabItems={hiddenPortfolioItemsArray} />
              )}
            </AnimatePresence>
          </ul>
        )}
        {!isMobile && (
          <div className={styles.portfolio__wrapper}>
            <button
              className={styles.portfolio__more}
              onClick={toggleHiddenPortfolioItems}
            >
              <span className={styles.portfolio__more__text}>
                {hiddenPortfolioItems ? "Свернуть" : "Показать еще проекты"}
              </span>
              <span className={styles.portfolio__more__border} />
            </button>
          </div>
        )}
      </div>

      {isMobile && (
        <div className={styles.portfolio__list__mobile}>
          <div className={styles.portfolio__list__mobile__container}>
            {currentPortfolioItems && (
              <PortfolioSlider tabItems={currentPortfolioItems} />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
