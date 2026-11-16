/**
 * Единый источник контента сайта.
 * Тексты демонстрационные: замените имя, контакты и проекты на свои.
 */

import work01 from "../assets/work/work-01.svg";
import work02 from "../assets/work/work-02.svg";
import work03 from "../assets/work/work-03.svg";
import work04 from "../assets/work/work-04.svg";

export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  featured?: boolean;
};

export type Service = {
  title: string;
  description: string;
  items: readonly string[];
};

export type SocialLink = {
  label: string;
  href: string;
};

export const navItems: readonly NavItem[] = [
  { label: "Работы", href: "#work" },
  { label: "Обо мне", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Контакты", href: "#contact" },
];

export const profile = {
  name: "Артём Орский",
  role: "Дизайнер и фронтенд-разработчик",
  location: "Удалённо",
  email: "orskiyghost@gmail.com",
  headline: "Сайты, в которых типографика задаёт ритм.",
  intro:
    "Проектирую интерфейсы и собираю их в коде. Беру немного проектов, чтобы доводить детали.",
  availability: "Открыт к новым проектам",
} as const;

export const projects: readonly Project[] = [
  {
    id: "project-01",
    index: "01",
    title: "Северный дом",
    category: "Брендинг и сайт",
    year: "2026",
    description:
      "Сайт архитектурного бюро: каталог проектов, крупные планы, сдержанная навигация.",
    image: work01,
    alt: "Сайт архитектурного бюро «Северный дом»: главная страница с крупным заголовком",
    href: "#contact",
    featured: true,
  },
  {
    id: "project-02",
    index: "02",
    title: "Клиника №7",
    category: "Продуктовый интерфейс",
    year: "2025",
    description:
      "Запись к врачу за три шага: расписание, специалист, подтверждение.",
    image: work02,
    alt: "Экран записи к врачу в интерфейсе клиники",
    href: "#contact",
  },
  {
    id: "project-03",
    index: "03",
    title: "Медленный журнал",
    category: "Редакционный сайт",
    year: "2025",
    description:
      "Журнал о городе: длинные тексты, крупная типографика, тихая анимация.",
    image: work03,
    alt: "Статья в редакционном журнале с крупной типографикой",
    href: "#contact",
  },
  {
    id: "project-04",
    index: "04",
    title: "Форма",
    category: "Айдентика",
    year: "2024",
    description:
      "Знак, сетка и шаблоны для мастерской, которая делает мебель.",
    image: work04,
    alt: "Айдентика мебельной мастерской «Форма»: знак и носители",
    href: "#contact",
  },
];

export const about = {
  paragraphs: [
    "Проектирую сайты и интерфейсы: собираю структуру, работаю с типографикой, проверяю адаптив.",
    "Веду проект от первого прототипа до запуска. Фронтенд пишу сам, поэтому макет и код не расходятся.",
    "В работе ценю ясную сетку, крупный текст и спокойный ритм. Декор добавляю только там, где он помогает.",
  ],
  facts: [
    { term: "Роль", value: "Дизайн и фронтенд" },
    { term: "Фокус", value: "Сайты и интерфейсы" },
    { term: "Формат", value: "Проект или команда" },
    { term: "География", value: "Удалённо" },
  ],
} as const;

export const services: readonly Service[] = [
  {
    title: "Дизайн сайтов",
    description:
      "Структура, типографика и визуальный язык. От прототипа до финальных макетов.",
    items: ["Арт-дирекшн", "Дизайн-система", "Адаптивные макеты"],
  },
  {
    title: "Фронтенд",
    description:
      "Сборка интерфейсов на React и TypeScript с вниманием к скорости и доступности.",
    items: ["React и TypeScript", "Анимация", "Производительность"],
  },
  {
    title: "Поддержка",
    description:
      "Развитие сайта после запуска: новые страницы, правки, ускорение.",
    items: ["Правки и развитие", "Аудит", "Консультации"],
  },
];

export const skills: readonly string[] = [
  "Figma",
  "React",
  "TypeScript",
  "CSS",
  "Анимация",
  "Доступность",
  "Дизайн-системы",
  "Прототипирование",
];

export const socials: readonly SocialLink[] = [
  { label: "GitHub", href: "https://github.com/orskiyghost-png" },
];
