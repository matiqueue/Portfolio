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
    emoji: "♟️",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io", "Tailwind CSS"],
    stars: 5,
    forks: 2,
    language: "TypeScript",
  },
  {
    title: "Portfolio",
    description: "Moje osobiste portfolio napisane w Next.js z nowoczesnym designem, animacjami 3D oraz mozliwoscia pobierania CV. Strona prezentuje moje projekty i umiejetnosci.",
    link: "https://github.com/matiqueue/Portfolio",
    emoji: "🎨",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    stars: 3,
    forks: 1,
    language: "TypeScript",
  },
  {
    title: "MineMaster AI",
    description: "Inteligentny asystent AI do gry Minecraft, wykorzystujacy uczenie maszynowe do pomocy w budowaniu struktur i automatyzacji zadan w grze.",
    link: "https://github.com/matiqueue/MineMaster-AI",
    emoji: "⛏️",
    technologies: ["Python", "TensorFlow", "JavaScript"],
    stars: 8,
    forks: 3,
    language: "Python",
  },
  {
    title: "DiscordDB",
    description: "Innowacyjny system bazy danych zintegrowany z Discordem, umozliwiajacy przechowywanie i zarzadzanie danymi bezposrednio przez bota Discord.",
    link: "https://github.com/matiqueue/DiscordDB",
    emoji: "🎮",
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
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Projekty Open Source",
    logo: "/github-logo.png",
    position: "Fullstack Developer",
    description: "Aktywny wklad w spolecznosc open source poprzez tworzenie i rozwijanie projektow publicznych na GitHubie. Budowanie narzedzi dla developerow i graczy.",
    years: "2024 - Obecnie",
    skills: ["Open Source", "Community", "Collaboration"],
  },
  {
    company: "SG-System",
    logo: "/company-logo.png",
    position: "Web Developer",
    description: "Zaprojektowanie i wdrozenie kompletnej strony internetowej sg-system.pl. Odpowiedzialny za frontend, backend oraz optymalizacje SEO. Praca z klientem nad wymaganiami i iteracyjne dostarczanie funkcjonalnosci.",
    years: "2023 - 2024",
    skills: ["Frontend", "Backend", "SEO"],
  },
  {
    company: "Klucze-Rowerowe",
    logo: "/company-logo.png",
    position: "Web Developer",
    description: "Stworzenie strony e-commerce klucze-rowerowe.pl z katalogiem produktow, systemem zamowien i integracjami platnosci. Implementacja responsywnego designu i optymalizacja wydajnosci.",
    years: "2022 - 2023",
    skills: ["E-commerce", "Payments", "UX"],
  },
  {
    company: "Freelance",
    logo: "/freelance-logo.png",
    position: "Junior Developer",
    description: "Poczatek przygody z programowaniem. Nauka podstaw web developmentu, tworzenie pierwszych projektow i budowanie portfolio. Zdobywanie doswiadczenia poprzez praktyczne projekty.",
    years: "2021 - 2022",
    skills: ["Learning", "Web Basics", "Portfolio"],
  },
];

export const aboutYou = {
  name: "Szymon Góral",
  description:
    "👋 Czesc, jestem Szymon! Jestem fullstack developerem specjalizujacym sie w tworzeniu nowoczesnych aplikacji webowych. Pracuje glownie z Next.js, TypeScript i MongoDB. Pasjonuje sie budowaniem intuicyjnych interfejsow uzytkownika oraz skalowalnych rozwiazn backendowych.",
  yearsOfExperience: "Od 2021",
  location: "Olkusz, Polska",
  email: "szymongoral@icloud.com",
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
