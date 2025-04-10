import { makeAutoObservable } from "mobx";

export type LanguageType = "ru" | "en" | "az";

class LanguageStore {
  currentLanguage: LanguageType = "ru";

  constructor() {
    makeAutoObservable(this);
  }

  setLanguage = (lang: LanguageType) => {
    this.currentLanguage = lang;
  };
}

const languageStore = new LanguageStore();
export default languageStore;
