import { ILocales } from "./types";

export const locales: ILocales = {
  RU: {
    header: {
      about: "Обо мне",
      skills: "Навыки",
      portfolio: "Портфолио",
      contact: "Обратная связь",
      game: "Игра",
      soft: "soft",
    },
    hero: {
      heroName: "Нурага Юсифли",
      heroDescription1: "Вы работаете над чем-то великим ?",
      heroDescription2:
        "Я с удовольствием помогу вам в этом! Напишите мне письмо и мы начнем проект прямо сейчас!",
      heroBtn: "Связаться с разработчиком",
    },
    about: {
      aboutTitle: "Обо мне",
      aboutIntroTitle:
        "Я Full-Stack разработчик с опытом создания веб-приложений и пользовательских интерфейсов. Постоянно развиваюсь, изучаю современные технологии, читаю книги и смотрю видеокурсы, которые помогают мне понимать, как всё устроено, на реальных примерах.",
      aboutIntro:
        "Постоянно развиваюсь, изучаю современные технологии, читаю книги и смотрю видеокурсы, которые помогают мне понимать, как всё устроено, на реальных примерах.",
      aboutBooksTitle:
        "Книги, которые способствовали моему профессиональному росту:",
      aboutBooksList: ["Современный учебник JavaScript"],
      aboutProjectsTitle: "Активно применяю свои знания в реальных проектах:",
      aboutProjectsList: [
        "Интернет-магазины",
        "Лендинги и промо-сайты",
        "Утилиты для медицинских компаний",
        "Аналоги 1С для учёта и склада",
        "Индивидуальные системы учёта для компаний",
      ],
      aboutExperienceTitle: "Опыт работы с функциональностью:",
      aboutExperienceList: [
        "Аутентификация пользователей через JWT токен",
        "Хеширование паролей и безопасное хранение данных",
        "Логика учёта материалов (приход, расход, создание, удаление)",
        "Создание удобного UI/UX интерфейса (интерактивные элементы, интеграция с другими сайтами)",
        "Архив операций пользователя (например, удалённый товар остаётся в истории)",
      ],
      aboutConclusion:
        "Всегда стремлюсь писать чистый и поддерживаемый код, следовать лучшим практикам и изучать новые технологии. Открыт для интересных проектов и сложных задач! 🚀",
    },
    skills: {
      skillsTitle: "Навыки",
      algorithmsTitle: "Алгоритмы и структуры",
      algorithmsText1:
        "Знание основных алгоритмов (сортировка, поиск, динамическое программирование)",
      algorithmsText2:
        "Структур данных (массивы, списки), их применение для решения различных задач",
    },
    portfolio: {
      portfolioTitle: "Портфолио",
      portfolioTabControlsTitles: [
        "Веб-сайты",
        "UI/UX дизайн",
        "Внешний интерфейс",
        "Все проекты",
      ],
      portfolioData: {
        digitalStore: "Интернет магазин «Цифровой»",
        brizlyPlatform: "Обучающая платформа «Бризли»",
        transportService: "Сайт грузоперевозок «Сервис»",
      },
      showMore: "Показать еще проекты",
      collapse: "Свернуть",
    },
    contact: {
      contactTitle: "ОБРАТНАЯ СВЯЗЬ",
      contactSmallTitle: "Напиши нам",
      contactTexts: [
        "Ваш проект — моя забота.",
        "Гарантирую качество, сроки и внимание к деталям.",
        "Я рядом, чтобы реализовать вашу идею в цифровом виде.",
        "Просто напишите — обсудим всё в деталях",
      ],
      placeholderStartText: "Укажите",
      formSuccessText: "Успешно отправлено!",
      formErrorText: "Ошибка отправки!",
      formNameText: "Ф.И.О. *",
      formEmailText: "E-mail *",
      formTelText: "Телефон (не обязательно)",
      formMessageText: "Сообщение *",
      formCheckboxText: "Согласен с правилами предоставления услуг",
      formBtnText: "Отправить",
    },
    back: "Назад",
  },
  EN: {
    header: {
      about: "About me",
      skills: "Skills",
      portfolio: "Portfolio",
      contact: "Contact",
      game: "Game",
      soft: "soft",
    },
    hero: {
      heroName: "Nuraga Yusifli",
      heroDescription1: "Are you working on something great ?",
      heroDescription2:
        "I'd love to help you with that! Drop me a line and we'll get started right away!",
      heroBtn: "Contact me",
    },
    about: {
      aboutTitle: "About Me",
      aboutIntroTitle:
        "I’m a Full-Stack developer with experience in building web applications and user interfaces.",
      aboutIntro:
        "I continuously grow by learning modern technologies, reading books, and watching video courses that help me understand how things work through real-world examples.",
      aboutBooksTitle: "Books that contributed to my professional growth:",
      aboutBooksList: ["A Modern JavaScript Tutorial"],
      aboutProjectsTitle:
        "I actively apply my knowledge in real-world projects:",
      aboutProjectsList: [
        "Online stores",
        "Landing pages and promo sites",
        "Utilities for medical companies",
        "1C-like systems for warehouse and accounting",
        "Custom warehouse systems for companies",
      ],
      aboutExperienceTitle: "Experience with functionality:",
      aboutExperienceList: [
        "User authentication via JWT token",
        "Password hashing and secure data storage",
        "Material tracking logic (incoming, outgoing, creation, deletion)",
        "Creating user-friendly UI/UX interfaces (interactive elements, integration with other sites)",
        "User operation archive (e.g., deleted products remain in history)",
      ],
      aboutConclusion:
        "I always strive to write clean, maintainable code, follow best practices, and explore new technologies. Open to exciting projects and challenging tasks! 🚀",
    },
    skills: {
      skillsTitle: "Skills",
      algorithmsTitle: "Algorithms and structures",
      algorithmsText1:
        "Knowledge of basic algorithms (sorting, search, dynamic programming)",
      algorithmsText2:
        "Data structures (arrays, lists) their application for solving various tasks",
    },
    portfolio: {
      portfolioTitle: "Portfolio",
      portfolioTabControlsTitles: [
        "Websites",
        "UI/UX Design",
        "Frontend",
        "All Projects",
      ],
      portfolioData: {
        digitalStore: "Online Store 'Digital'",
        brizlyPlatform: "Educational Platform 'Brizly'",
        transportService: "Freight Website 'Service'",
      },
      showMore: "Show more projects",
      collapse: "Collapse",
    },
    contact: {
      contactTitle: "CONTACT",
      contactSmallTitle: "Write to us",
      contactTexts: [
        "Your project is my priority.",
        "I guarantee quality, deadlines, and attention to detail.",
        "I'm here to bring your idea to life in digital form.",
        "Just write to me — we’ll discuss every detail.",
      ],
      placeholderStartText: "Enter",
      formSuccessText: "Successfully sent!",
      formErrorText: "Submission error!",
      formNameText: "Full Name *",
      formEmailText: "E-mail *",
      formTelText: "Phone (optional)",
      formMessageText: "Message *",
      formCheckboxText: "I agree with the terms of service",
      formBtnText: "Submit",
    },
    back: "Back",
  },

  AZ: {
    header: {
      about: "Haqqımda",
      skills: "Bacarıqlar",
      portfolio: "Portfolio",
      contact: "Əlaqə",
      game: "Oyun",
      soft: "soft",
    },
    hero: {
      heroName: "Nurağa Yusifli",
      heroDescription1: "Böyük bir veb-sayt layihəsi üzərində işləyirsiniz?",
      heroDescription2:
        "Bu işdə sizə kömək etməkdən məmnun olaram! Mənə məktub yazın və layihəyə başlayaq!",
      heroBtn: "Mənimlə əlaqə saxlayın",
    },
    about: {
      aboutTitle: "Haqqımda",
      aboutIntroTitle:
        "Mən veb tətbiqlər və istifadəçi interfeysləri hazırlayan Full-Stack proqramçiyam. Davamlı olaraq inkişaf edirəm, müasir texnologiyaları öyrənirəm, kitablar oxuyuram və texnologiyaların necə işlədiyini real nümunələrlə daha dərindən anlamağa kömək edən video kurslara baxıram.",
      aboutIntro:
        "Davamlı olaraq inkişaf edirəm, müasir texnologiyaları öyrənirəm, kitablar oxuyuram və texnologiyaların necə işlədiyini real nümunələrlə daha dərindən anlamağa kömək edən video kurslara baxıram.",
      aboutBooksTitle: "Peşəkar inkişafımda rol oynayan kitablar:",
      aboutBooksList: ["Müasir JavaScript Dərsliyi"],
      aboutProjectsTitle:
        "Biliklərimi real layihələrdə fəal şəkildə tətbiq edirəm:",
      aboutProjectsList: [
        "Onlayn mağazalar",
        "Vizit kart saytları və reklam səhifələri",
        "Tibbi şirkətlər üçün alətlər",
        "Anbar və uçot sistemi üçün 1C analoqu",
        "Şirkətlər üçün fərdi anbardan istifadə saytları",
      ],
      aboutExperienceTitle: "İş təcrübəm bunları əhatə edir:",
      aboutExperienceList: [
        "JWT token ilə istifadəçi autentifikasiyası",
        "Parolun heşlənməsi və məlumatların təhlükəsiz saxlanması",
        "Material uçotu məntiqi (gələn, gedən, yaradılan, silinən)",
        "Rahat UI/UX interfeyslərin yaradılması (interaktiv elementlər, digər saytlarla inteqrasiya)",
        "İstifadəçi əməliyyatlarının arxivi (məsələn, silinmiş məhsul tarixçədə qalır)",
      ],
      aboutConclusion:
        "Həmişə təmiz və baxımlı kod yazmağa, ən yaxşı təcrübələrə əməl etməyə və yeni texnologiyaları araşdırmağa çalışıram. Maraqlı layihələrə və çətin tapşırıqlara açığam! 🚀",
    },
    skills: {
      skillsTitle: "Bacarıqlar",
      algorithmsTitle: "Algoritmalar və strukturalar",
      algorithmsText1:
        "Əsas alqoritmləri bilmək (çeşidləmə, axtarış, dinamik proqramlaşdırma)",
      algorithmsText2:
        "Məlumat strukturları (massivlər) onların müxtəlif problemlərin həlli üçün tətbiqi",
    },
    portfolio: {
      portfolioTitle: "Layihələr",
      portfolioTabControlsTitles: [
        "Veb saytlar",
        "UI/UX Dizayn",
        "İnterfeys",
        "Bütün layihələr",
      ],
      portfolioData: {
        digitalStore: "Onlayn Mağaza 'Rəqəmsal'",
        brizlyPlatform: "Tədris Platforması 'Brizly'",
        transportService: "Yükdaşıma Saytı 'Servis'",
      },
      showMore: "Daha çox layihə göstər",
      collapse: "Yığışdır",
    },
    contact: {
      contactTitle: "ƏLAQƏ",
      contactSmallTitle: "Bizə yazın",
      contactTexts: [
        "Sizin layihəniz — mənim qayğımdır.",
        "Keyfiyyətə, vaxtında təhvilə və detallara diqqətə zəmanət verirəm.",
        "Fikrinizi rəqəmsal formada həyata keçirmək üçün yanınızdayam.",
        "Sadəcə yazın — hər şeyi detallı şəkildə müzakirə edək.",
      ],
      placeholderStartText: "Daxil edin",
      formSuccessText: "Uğurla göndərildi!",
      formErrorText: "Göndərmə xətası!",
      formNameText: "Ad, Soyad *",
      formEmailText: "E-poçt *",
      formTelText: "Telefon (istəyə bağlı)",
      formMessageText: "Mesaj *",
      formCheckboxText: "Mən xidmət şərtləri ilə razıyam",
      formBtnText: "Göndər",
    },
    back: "Geri",
  },
} as const;

export type Language = keyof typeof locales;
