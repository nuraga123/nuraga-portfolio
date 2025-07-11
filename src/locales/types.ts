interface ILocalesHeader {
  about: string;
  skills: string;
  portfolio: string;
  contact: string;
  game: string;
}

interface ILocalesHero {
  heroName: string;
  heroDescription1: string;
  heroDescription2: string;
  heroBtn: string;
}

interface ILocalesAbout {
  aboutTitle: string;
  aboutIntroTitle: string;
  aboutIntro: string;
  aboutBooksTitle: string;
  aboutBooksList: readonly string[];
  aboutProjectsTitle: string;
  aboutProjectsList: readonly string[];
  aboutExperienceTitle: string;
  aboutExperienceList: readonly string[];
  aboutConclusion: string;
}

interface ILocalesSkills {
  skillsTitle: string;
  algorithmsTitle: string;
  algorithmsText1: string;
  algorithmsText2: string;
}

interface ILocalesPortfolio {
  portfolioTitle: string;
  portfolioTabControlsTitles: readonly string[];
  portfolioData: {
    digitalStore: string;
    brizlyPlatform: string;
    transportService: string;
  };
  showMore: string;
  collapse: string;
}

interface ILocalesContact {
  contactTitle: string;
  contactSmallTitle: string;
  contactTexts: readonly string[];
  placeholderStartText: string;
  formSuccessText: string;
  formErrorText: string;
  formNameText: string;
  formEmailText: string;
  formTelText: string;
  formMessageText: string;
  formCheckboxText: string;
  formBtnText: string;
}

interface ILocalesItem {
  header: ILocalesHeader;
  hero: ILocalesHero;
  about: ILocalesAbout;
  skills: ILocalesSkills;
  portfolio: ILocalesPortfolio;
  contact: ILocalesContact;
  back: string;
}

export interface ILocales {
  RU: ILocalesItem;
  EN: ILocalesItem;
  AZ: ILocalesItem;
}
