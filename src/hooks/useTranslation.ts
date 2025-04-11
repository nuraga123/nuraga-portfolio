import { useMemo } from "react";
import { languageStore } from "@/store/LanguageStore";
import { locales } from "@/locales";

export const useTranslation = () => {
  const lang = languageStore.language;
  return useMemo(() => locales[lang], [lang]);
};
