const icons = {
  flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  spring: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  c: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  postgres: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  mongo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  oracle: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  bash: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  debian: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg",
  fedora: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-original.svg",
  opensuse: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opensuse/opensuse-original.svg",
  godot: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg",
};

// Estructura común para reutilizar los items y solo cambiar el título
const mobileSkills = [
  { name: "Flutter", icon: icons.flutter },
  { name: "Dart", icon: icons.dart },
  { name: "Firebase", icon: icons.firebase },
];

const webSkills = [
  { name: "Next.js", icon: icons.nextjs, invertDark: true },
  { name: "React", icon: icons.react },
  { name: "TypeScript", icon: icons.typescript },
  { name: "JavaScript", icon: icons.javascript },
  { name: "Tailwind", icon: icons.tailwind },
  { name: "HTML5", icon: icons.html },
  { name: "CSS3", icon: icons.css },
];

const backendSkills = [
  { name: "Java", icon: icons.java },
  { name: "Spring Boot", icon: icons.spring },
  { name: "Python", icon: icons.python },
  { name: "PHP", icon: icons.php },
  { name: "C++", icon: icons.cpp },
  { name: "C", icon: icons.c },
];

const dbSkills = [
  { name: "PostgreSQL", icon: icons.postgres },
  { name: "MySQL", icon: icons.mysql },
  { name: "MongoDB", icon: icons.mongo },
];

const devopsSkills = [
  { name: "Docker", icon: icons.docker },
  { name: "Linux", icon: icons.linux },
  { name: "Oracle Cloud", icon: icons.oracle },
  { name: "AWS", icon: icons.aws, invertDark: true },
  { name: "Git", icon: icons.git },
  { name: "GitHub", icon: icons.github, invertDark: true },
  { name: "Bash", icon: icons.bash },
  { name: "Debian", icon: icons.debian },
  { name: "Fedora", icon: icons.fedora },
  { name: "openSUSE", icon: icons.opensuse },
];

const gameSkills = [
  { name: "Godot", icon: icons.godot },
];

export const skillsData = {
  es: [
    { title: "Desarrollo Móvil", skills: mobileSkills },
    { title: "Desarrollo Web", skills: webSkills },
    { title: "Backend y Sistemas", skills: backendSkills },
    { title: "Bases de Datos", skills: dbSkills },
    { title: "DevOps y Cloud", skills: devopsSkills },
    { title: "Videojuegos", skills: gameSkills },
  ],
  en: [
    { title: "Mobile Development", skills: mobileSkills },
    { title: "Web Development", skills: webSkills },
    { title: "Backend & Systems", skills: backendSkills },
    { title: "Databases", skills: dbSkills },
    { title: "DevOps & Cloud", skills: devopsSkills },
    { title: "Game Dev", skills: gameSkills },
  ]
};