import { useState } from "react";
import { Link } from "react-scroll";
import Logo from "@/components/Logo/Logo";
import { useMediaQuery } from "@/hooks/useWindowWidth";
import styles from "./styles.module.scss";
import stylesMenu from "./mobileMenu.module.scss";
import { observer } from "mobx-react-lite";
import { useTranslation } from "@/hooks/useTranslation";
import SwitchLang from "../SwitchLang";

const Header = observer(() => {
  const t = useTranslation();
  const { header } = t;
  const { about, skills, portfolio, contact } = header;

  const isMobile = useMediaQuery(670);
  const [menuOpen, setMenuOpen] = useState(false);
  const spy = true;
  const smooth = true;
  const offset = 140;
  const duration = 500;

  const currentMenuItemClass = isMobile
    ? stylesMenu.menu__item
    : styles.header__nav__list__item;

  const handleToggleMenu = () => {
    (document.querySelector("body") as HTMLBodyElement).classList.toggle(
      "overflow-hidden"
    );

    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    (document.querySelector("body") as HTMLBodyElement).classList.remove(
      "overflow-hidden"
    );

    setMenuOpen(false);
  };

  if (isMobile === null) return false;

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <Logo />

        {isMobile && (
          <button
            onClick={handleToggleMenu}
            className={`${styles.burger_menu} ${menuOpen ? styles.open : ""}`}
          >
            <span />
            <span />
            <span />
          </button>
        )}

        <nav
          className={`${isMobile ? stylesMenu.menu : styles.header__nav} ${
            menuOpen ? stylesMenu.open : ""
          }`}
        >
          <ul
            className={`${
              isMobile ? styles.list_reset : styles.header__nav__list
            }`}
          >
            <li className={currentMenuItemClass}>
              <Link
                href="/"
                to="about"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
                className={styles.header__nav__list__item__link}
                onClick={closeMenu}
              >
                {about}
              </Link>
            </li>
            <li className={currentMenuItemClass}>
              <Link
                href="/"
                to="skills"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
                className={styles.header__nav__list__item__link}
                onClick={closeMenu}
              >
                {skills}
              </Link>
            </li>
            <li className={currentMenuItemClass}>
              <Link
                href="/"
                to="portfolio"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
                className={styles.header__nav__list__item__link}
                onClick={closeMenu}
              >
                {portfolio}
              </Link>
            </li>
            <li className={currentMenuItemClass}>
              <Link
                href="/"
                to="contact"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
                className={styles.header__nav__list__item__link}
                onClick={closeMenu}
              >
                {contact}
              </Link>
            </li>
            {isMobile && (
              <li className={currentMenuItemClass}>
                <SwitchLang />
              </li>
            )}
          </ul>
        </nav>

        {!isMobile && <SwitchLang />}
      </div>
    </header>
  );
});

export default Header;
