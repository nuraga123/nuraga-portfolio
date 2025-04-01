import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { useMediaQuery } from "@/hooks";
import styles from "./styles.module.scss";
import gsap from "gsap";

const Hero = () => {
  const isMobile800 = useMediaQuery(800);
  const isMobile485 = useMediaQuery(485);

  const heroTitle = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const colors = gsap.to(heroTitle.current, {
      paused: true,
      duration: 20,
      repeat: -1,
      "--hue": 360,
    });

    const doRandom = () => {
      gsap
        .timeline()
        .to(heroTitle.current, {
          duration: 0.1,
          opacity: function () {
            return gsap.utils.random(0.9, 0.95);
          },
          delay: function () {
            return gsap.utils.random(0.1, 2);
          },
        })
        .to(heroTitle.current, {
          duration: 0.1,
          opacity: 1,
          onComplete: function () {
            doRandom();
          },
        });
    };

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!mediaQuery || !mediaQuery.matches) {
      colors.play();
      doRandom();
    }
  }, []);

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
          <h1 className={styles.hero__title} ref={heroTitle}>
            Full - Stack Developer
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
