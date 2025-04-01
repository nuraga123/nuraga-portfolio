import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";

import { useMediaQuery } from "@/hooks";
import styles from "./styles.module.scss";

const Hero = () => {
  const isMobile800 = useMediaQuery(800);
  const isMobile485 = useMediaQuery(485);

  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: isMobile485
          ? ""
          : `url('/img/hero-bg${isMobile800 ? "-mobile" : ""}.png')`,
      }}
    >
      <div className="sub-container">
        <div className={styles.hero__inner}>
          <h1 className={styles.hero__title}>
            <ReactTyped
              strings={["Full - Stack Developer"]}
              startDelay={300}
              typeSpeed={100}
              backSpeed={100}
              backDelay={100}
              smartBackspace={true}
              loop={true}
              showCursor={true}
              cursorChar={"!"}
            />
          </h1>
          <h3 className={styles.hero__name}>Nuraga Yusifli</h3>
          <div className={styles.hero__description}>
            <p>Вы работаете над чем-то великим?</p>
            <p>
              Я с удовольствием помогу вам в этом! Напишите мне письмо и мы
              начнем проект прямо сейчас!
            </p>
          </div>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={30}
            duration={500}
            className={styles.hero__btn}
          >
            Связаться с разработчиком
          </Link>
          {!isMobile800 && (
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
};

export default Hero;
