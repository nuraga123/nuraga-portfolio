import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return windowWidth;
};

export const useMediaQuery = (maxWidth: number) => {
  const windowWidth = useWindowWidth();

  if (windowWidth === null) return null;

  return windowWidth <= maxWidth;
};
