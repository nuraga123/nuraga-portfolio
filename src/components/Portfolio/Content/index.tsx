import { motion } from "framer-motion";
import PortfolioTabItem from "../Item";
import styles from "../styles.module.scss";
import { useTranslation } from "@/hooks/useTranslation";

export interface IPortfolioTabContent {
  tabItems: {
    id: number;
    img: string;
    link: string;
    title: string;
  }[];
}

const PortfolioTabContent = ({ tabItems }: IPortfolioTabContent) => {
  const t = useTranslation();
  const { portfolio } = t;
  const { digitalStore, brizlyPlatform, transportService } =
    portfolio.portfolioData;

  return (
    <>
      {tabItems.map((item) => (
        <motion.li
          key={item.id}
          className={styles.portfolio__list__item}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <PortfolioTabItem
            title={
              item.title === "digitalStore"
                ? digitalStore
                : item.title === "brizlyPlatform"
                ? brizlyPlatform
                : transportService
            }
            imgSrc={item.img}
            link={item.link}
          />
        </motion.li>
      ))}
    </>
  );
};

export default PortfolioTabContent;
