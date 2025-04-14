import Image from "next/image";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";
import { observer } from "mobx-react-lite";
import { useMediaQuery } from "@/hooks/useWindowWidth";
import { useTranslation } from "@/hooks/useTranslation";
import styles from "./styles.module.scss";

const Hero = observer(() => {
  const t = useTranslation();
  const { hero } = t;
  const { heroName, heroDescription1, heroDescription2, heroBtn } = hero;

  const isMobile650 = useMediaQuery(650);
  const isMobile485 = useMediaQuery(485);

  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: isMobile485
          ? ""
          : `url('/img/hero-bg${isMobile650 ? "-mobile" : ""}.png')`,
      }}
    >
      <div className="sub-container">
        <div className={styles.hero__inner}>
          <h1 className={styles.hero__title}>
            <ReactTyped
              strings={["Full-Stack Developer"]}
              typeSpeed={300}
              backSpeed={150}
              showCursor={true}
              loop
            />
          </h1>

          <div className={styles.hero__inner__wrapper}>
            <h3 className={styles.hero__name}>{heroName}</h3>
            <Image
              src={"/img/programmer.png"}
              alt="programmer"
              width={50}
              height={50}
              priority
            />
          </div>

          <div className={styles.hero__description}>
            <p>{heroDescription1}</p>
            <p>{heroDescription2}</p>
          </div>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={30}
            duration={500}
            className={styles.hero__btn}
          >
            {heroBtn}
          </Link>

          {!isMobile650 && (
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
              className={styles.hero__arrow}
            />
          )}
        </div>
      </div>
    </section>
  );
});

export default Hero;
