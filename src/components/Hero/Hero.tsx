import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";
import { useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "@/hooks";
import styles from "./styles.module.scss";

const Hero = () => {
  const isMobile650 = useMediaQuery(650);
  const isMobile485 = useMediaQuery(485);

  const [isTaping, setIsTaping] = useState(true);

  setTimeout(() => setIsTaping(false), 10000);

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
              strings={["Full - Stack Developer"]}
              typeSpeed={200}
              backSpeed={250}
              loop={isTaping}
              showCursor={false}
            />
          </h1>
          <div className={styles.hero__inner__wrapper}>
            <h3 className={styles.hero__name}>Nuraga Yusifli</h3>
            <Image
              src={"/img/programmer.png"}
              alt="programmer"
              width={50}
              height={50}
              priority
            />
          </div>
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
};

export default Hero;
