import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MainTitle from "../MainTitle/MainTitle";
import { hiddenPortfolioItemsArray, portfolioItems } from "./Contents";
import PortfolioTabContent from "./Content";
import PortfolioTabControl from "./Control";
import PortfolioSlider from "./Slider/Slider";
import { useMediaQuery } from "@/hooks/useWindowWidth";
import { useTranslation } from "@/hooks/useTranslation";

import styles from "./styles.module.scss";
import { observer } from "mobx-react-lite";

const Portfolio = observer(() => {
  const t = useTranslation();
  const { portfolio } = t;
  const { portfolioTitle, portfolioTabControlsTitles, showMore, collapse } =
    portfolio;

  const isMobile = useMediaQuery(1080);

  const [portfolioTabId, setPortfolioTabId] = useState<number>(1);
  const currentPortfolioItems = portfolioItems[portfolioTabId - 1];

  const [hiddenPortfolioItems, setHiddenPortfolioItems] = useState(false);

  const toggleHiddenPortfolioItems = () =>
    setHiddenPortfolioItems(!hiddenPortfolioItems);

  const portfolioTabControls = [
    {
      id: 1,
      title: portfolioTabControlsTitles[0],
    },
    {
      id: 2,
      title: portfolioTabControlsTitles[1],
    },
    {
      id: 3,
      title: portfolioTabControlsTitles[2],
    },
    {
      id: 4,
      title: portfolioTabControlsTitles[3],
    },
  ];

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className="container">
        <MainTitle text={portfolioTitle} />
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
                {hiddenPortfolioItems ? collapse : showMore}
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
});

export default Portfolio;
