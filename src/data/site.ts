/**
 * Единый источник контента сайта.
 * Все заглушки помечены словом «заглушка» — заменяйте текст здесь, компоненты трогать не нужно.
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
  /** Заглушка: имя владельца сайта. */
  name: "Имя Фамилия",
  /** Заглушка: специализация. */
  role: "Дизайнер и фронтенд-разработчик",
  /** Заглушка: город. */
  location: "Город, страна",
  /** Заглушка: контактный адрес. */
  email: "hello@example.com",
  headline: "Интерфейсы, в которых типографика ведёт, а не украшает.",
  /** Заглушка: короткое представление. */
  intro:
    "Проектирую и собираю сайты на стыке редакционного дизайна и аккуратного фронтенда. Работаю с малым числом проектов, чтобы держать качество.",
  availability: "Открыт к новым проектам",
} as const;

export const projects: readonly Project[] = [
  {
    id: "project-01",
    index: "01",
    /** Заглушка: название проекта. */
    title: "Название проекта",
    category: "Брендинг и сайт",
    year: "2026",
    description:
      "Заглушка описания: задача, решение и результат в двух-трёх строках.",
    image: work01,
    alt: "Заглушка обложки первого проекта",
    href: "#contact",
    featured: true,
  },
  {
    id: "project-02",
    index: "02",
    title: "Название проекта",
    category: "Продуктовый интерфейс",
    year: "2025",
    description:
      "Заглушка описания: что было сделано и на что это повлияло.",
    image: work02,
    alt: "Заглушка обложки второго проекта",
    href: "#contact",
  },
  {
    id: "project-03",
    index: "03",
    title: "Название проекта",
    category: "Редакционный сайт",
    year: "2025",
    description:
      "Заглушка описания: коротко о структуре, типографике и движении.",
    image: work03,
    alt: "Заглушка обложки третьего проекта",
    href: "#contact",
  },
  {
    id: "project-04",
    index: "04",
    title: "Название проекта",
    category: "Айдентика",
    year: "2024",
    description:
      "Заглушка описания: чем проект отличается и почему он в подборке.",
    image: work04,
    alt: "Заглушка обложки четвёртого проекта",
    href: "#contact",
  },
];

export const about = {
  /** Заглушка: абзацы о себе. */
  paragraphs: [
    "Заглушка абзаца: два-три предложения о том, как вы работаете, что для вас важно и с кем вы работаете.",
    "Заглушка абзаца: опыт, подход к проектам, отношение к деталям и срокам.",
  ],
  facts: [
    { term: "Опыт", value: "N лет" },
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
  /** Заглушки: замените ссылки на свои профили. */
  { label: "GitHub", href: "https://github.com/" },
  { label: "Telegram", href: "https://t.me/" },
  { label: "Behance", href: "https://www.behance.net/" },
];
