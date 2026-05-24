import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiAmazonaws,
  SiSupabase,
  SiFirebase,
  SiRedux,
  SiGit,
  SiDocker,
  SiBootstrap,
  SiMui,
  SiPrisma,
  SiFlutter,
  SiHeroku,
  SiTailwindcss,
} from "react-icons/si";

export const skills = [
  {
    icon: SiTypescript,
    text: "TypeScript",
  },
  {
    icon: SiJavascript,
    text: "JavaScript",
  },
  {
    icon: SiReact,
    text: "React",
  },
  {
    icon: SiNextdotjs,
    text: "Next",
  },
  {
    icon: SiTailwindcss,
    text: "Tailwind",
  },
  {
    icon: SiRedux,
    text: "Redux",
  },
  {
    icon: SiFlutter,
    text: "Flutter",
  },
  {
    icon: SiHtml5,
    text: "HTML5",
  },
  {
    icon: SiCss3,
    text: "CSS3",
  },
  {
    icon: SiNodedotjs,
    text: "Node",
  },
  {
    icon: SiExpress,
    text: "Express",
  },
  {
    icon: SiMongodb,
    text: "MongoDB",
  },
  {
    icon: SiHeroku,
    text: "Heroku",
  },
  {
    icon: SiGit,
    text: "Git",
  },
  {
    icon: SiPrisma,
    text: "Prisma",
  },
  {
    icon: SiBootstrap,
    text: "Bootstrap",
  },
];

export interface Project {
  title: string;
  description: string;
  link: string;
  emoji: string;
  technologies?: string[];
  stars?: number;
  forks?: number;
  language?: string;
}

export const projects: Project[] = [
  {
    title: "Mate Chess",
    description: "Zaawansowana platforma szachowa z funkcjami gry online w czasie rzeczywistym, analizy partii z wykorzystaniem silnika szachowego, nauki strategii oraz rankingiem graczy. Projekt wykorzystuje nowoczesny stack technologiczny.",
    link: "https://github.com/matiqueue/mate-chess.pl",
    emoji: "chess",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io", "Tailwind CSS"],
    stars: 5,
    forks: 2,
    language: "TypeScript",
  },
  {
    title: "Portfolio",
    description: "Moje osobiste portfolio napisane w Next.js z nowoczesnym designem, animacjami 3D oraz mozliwoscia pobierania CV. Strona prezentuje moje projekty i umiejetnosci.",
    link: "https://github.com/matiqueue/Portfolio",
    emoji: "palette",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    stars: 3,
    forks: 1,
    language: "TypeScript",
  },
  {
    title: "MineMaster AI",
    description: "Inteligentny asystent AI do gry Minecraft, wykorzystujacy uczenie maszynowe do pomocy w budowaniu struktur i automatyzacji zadan w grze.",
    link: "https://github.com/matiqueue/MineMaster-AI",
    emoji: "pickaxe",
    technologies: ["Python", "TensorFlow", "JavaScript"],
    stars: 8,
    forks: 3,
    language: "Python",
  },
  {
    title: "DiscordDB",
    description: "Innowacyjny system bazy danych zintegrowany z Discordem, umozliwiajacy przechowywanie i zarzadzanie danymi bezposrednio przez bota Discord.",
    link: "https://github.com/matiqueue/DiscordDB",
    emoji: "gamepad",
    technologies: ["JavaScript", "Discord.js", "Node.js"],
    stars: 12,
    forks: 4,
    language: "JavaScript",
  },
];

export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
  skills?: string[];
  link?: string;
  iconType?: "school" | "github" | "console" | "server" | "chess" | "bike" | "code";
}

export interface WorkExperienceType {
  type: "school" | "project" | "job";
}

export const workExperiences: (WorkExperience & WorkExperienceType)[] = [
  {
    type: "school",
    company: "Szkola im. Antoniego Kocjana w Olkuszu",
    logo: "",
    position: "Technik programista",
    description: "Nauka programowania w specjalizacji technik programista. Zdobywanie podstaw algorytmiki, programowania obiektowego, baz danych oraz tworzenia aplikacji webowych i desktopowych. Realizacja projektow szkolnych i rozwijanie umiejetnosci praktycznych.",
    years: "2021 - Obecnie",
    skills: ["Algorytmika", "Programowanie", "Bazy danych"],
    iconType: "school",
  },
  {
    type: "job",
    company: "Projekty Open Source",
    logo: "",
    position: "Fullstack Developer",
    description: "Aktywny wklad w spolecznosc open source poprzez tworzenie i rozwijanie projektow publicznych na GitHubie. Budowanie narzedzi dla developerow i graczy.",
    years: "2022 - Obecnie",
    skills: ["Open Source", "Community", "Collaboration"],
    link: "https://github.com/matiqueue",
    iconType: "github",
  },
  {
    type: "project",
    company: "Konsola Operatorska",
    logo: "",
    position: "Projekt szkolny / Developer",
    description: "Aplikacja konsoli operatorskiej stworzona w ramach projektu szkolnego — panel zarzadzania z analitykami zbieranymi przez Hotjar. Realizacja pelnego cyklu: projekt, implementacja, wdrozenie.",
    years: "2023",
    skills: ["Web App", "Analytics", "Hotjar"],
    link: "https://github.com/matiqueue/konsola-operatorska",
    iconType: "console",
  },
  {
    type: "job",
    company: "SG-System",
    logo: "",
    position: "Web Developer",
    description: "Zaprojektowanie i wdrozenie kompletnej strony internetowej sg-system.pl. Odpowiedzialny za frontend, backend oraz optymalizacje SEO. Praca z klientem nad wymaganiami i iteracyjne dostarczanie funkcjonalnosci.",
    years: "2024",
    skills: ["Frontend", "Backend", "SEO"],
    iconType: "server",
  },
  {
    type: "project",
    company: "Mate Chess",
    logo: "",
    position: "Lead Developer",
    description: "Zaawansowana platforma szachowa z funkcjami gry online w czasie rzeczywistym, analizy partii z wykorzystaniem silnika szachowego, nauki strategii oraz rankingiem graczy. Projekt wykorzystuje nowoczesny stack technologiczny.",
    years: "2025",
    skills: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
    link: "https://github.com/matiqueue/mate-chess.pl",
    iconType: "chess",
  },
  {
    type: "job",
    company: "Klucze-Rowerowe",
    logo: "",
    position: "Web Developer",
    description: "Stworzenie strony e-commerce klucze-rowerowe.pl z katalogiem produktow, systemem zamowien i integracjami platnosci. Implementacja responsywnego designu i optymalizacja wydajnosci.",
    years: "2026",
    skills: ["E-commerce", "Payments", "UX"],
    iconType: "bike",
  },
  {
    type: "job",
    company: "Freelance",
    logo: "",
    position: "Junior Developer",
    description: "Poczatek przygody z programowaniem. Nauka podstaw web developmentu, tworzenie pierwszych projektow i budowanie portfolio. Zdobywanie doswiadczenia poprzez praktyczne projekty.",
    years: "2026 - Obecnie",
    skills: ["Learning", "Web Basics", "Portfolio"],
    iconType: "code",
  },
];

export const aboutYou = {
  name: "Szymon Góral",
  description:
    "👋 Czesc, jestem Szymon! Jestem fullstack developerem specjalizujacym sie w tworzeniu nowoczesnych aplikacji webowych. Pracuje glownie z Next.js, TypeScript i MongoDB. Pasjonuje sie budowaniem intuicyjnych interfejsow uzytkownika oraz skalowalnych rozwiazn backendowych.",
  yearsOfExperience: "Od 2021",
  location: "Olkusz, Polska",
  email: "szymon.goral@icloud.com",
};

export const logoText = "@matiqueue";

export const marketingHeadlines = {
  mainHeadline: "Czesc, witaj na moim portfolio!",
  subHeadline: "Fullstack Developer | UI/UX Enthusiast | Next.js & TypeScript",
};

export const websiteMetadata = {
  title: "Szymon Góral | Fullstack Developer Portfolio",
  description: "Portfolio Szymona Górala - Fullstack Developer specjalizujacy sie w Next.js, TypeScript i MongoDB. Zobacz moje projekty i doswiadczenie.",
};
