import { makeAutoObservable } from "mobx";
import { Language } from "@/locales";

class LanguageStore {
  language: Language = "RU";

  constructor() {
    makeAutoObservable(this);
  }

  setLanguage(lang: Language) {
    this.language = lang;
  }
}

export const languageStore = new LanguageStore();
