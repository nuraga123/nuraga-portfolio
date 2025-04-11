import { makeAutoObservable } from "mobx";
import { Language } from "@/locales";

class LanguageStore {
  language: Language = "RU";

  constructor() {
    makeAutoObservable(this);
  }

  getLanguage() {
    return this.language;
  }

  setLanguage(lang: Language) {
    this.language = lang;
    localStorage.setItem("language", lang);
  }

  initLanguageFromLocalStorage() {
    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem("language") as Language | null;
      if (storedLang && ["RU", "EN", "AZ"].includes(storedLang)) {
        this.language = storedLang;
      }
    }
  }
}

export const languageStore = new LanguageStore();
