import { dictionary } from "@/locales/dictionary";
import { useLanguage } from "./useLanguage";

export const useTranslate = () => {
  const { currentLanguage } = useLanguage();

  const t = () => dictionary[currentLanguage];
};
