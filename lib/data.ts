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
}

export const projects: Project[] = [
  {
    title: "Mate Chess",
    description: "Platforma szachowa z funkcjami gry online, analizy partii i nauki strategii szachowych.",
    link: "https://github.com/matiqueue/mate-chess.pl",
    emoji: "♟️",
  },
  {
    title: "MineMaster AI",
    description: "Inteligentny asystent AI do gry Minecraft, pomagajacy w budowaniu i automatyzacji.",
    link: "https://github.com/matiqueue/MineMaster-AI",
    emoji: "⛏️",
  },
  {
    title: "DiscordDB",
    description: "System bazy danych zintegrowany z Discordem do przechowywania i zarzadzania danymi.",
    link: "https://github.com/matiqueue/DiscordDB",
    emoji: "🎮",
  },
];

export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "SG-System",
    logo: "/company-logo.png",
    position: "Web Developer",
    description: "Zaprojektowanie i wdrozenie kompletnej strony internetowej sg-system.pl. Odpowiedzialny za frontend, backend oraz optymalizacje SEO.",
    years: "2023 - 2024",
  },
  {
    company: "Klucze-Rowerowe",
    logo: "/company-logo.png",
    position: "Web Developer",
    description: "Stworzenie strony e-commerce klucze-rowerowe.pl z katalogiem produktow, systemem zamowien i integracjami platnosci.",
    years: "2022 - 2023",
  },
];

export const aboutYou = {
  name: "Szymon Góral",
  description:
    "👋 Hi, I'm Simon. I'm a fullstack developer creating mostly custom web applications. You can find more below.",
  yearsOfExperience: "Since 2021",
  location: "Olkusz, Poland",
  email: "szymongoral@icloud.com",
};

export const logoText = "@matiqueue";

export const marketingHeadlines = {
  mainHeadline: "Hi, welcome to my portfolio page!",
  subHeadline: "[ Information About Me: ]",
};

export const websiteMetadata = {
  title: "Portfolio | matiqueue",
  description: "👋 Hey, Random Person here. Welcome to my portflio/blog.",
};
