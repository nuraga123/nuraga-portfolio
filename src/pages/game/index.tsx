import Link from "next/link";
import { MdRestartAlt } from "react-icons/md";
import MainTitle from "@/components/MainTitle/MainTitle";
import CarScene from "@/components/CarScene";
import styles from "./styles.module.scss";
import { useTranslation } from "@/hooks/useTranslation";

export default function Game() {
  const t = useTranslation();
  const gameTitle = t.header.game;

  return (
    <div className={styles.game}>
      <div className={styles.header}>
        <MainTitle text={gameTitle} />
        <div className={styles.resetButton}>
          <MdRestartAlt onClick={() => window.location.reload()} />
        </div>
        <Link href="/">
          <button className={styles.backButton}>{t.back}</button>
        </Link>
      </div>

      <div className={styles.carScene}>
        <CarScene />
      </div>
    </div>
  );
}
