import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const Logo = ({
  width = 85,
  height = 40,
}: {
  width?: number;
  height?: number;
}) => (
  <Link href="/">
    <Image
      className={styles.logo}
      src="/img/logo.svg"
      alt="logo"
      width={width}
      height={height}
      priority
    />
  </Link>
);

export default Logo;
