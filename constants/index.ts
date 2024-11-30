import { HTML, CSS, JS, TS, PY, NodeJS, ReactJS, TailwindCSS } from "@/assets/icons/index";
import { mern, terminal, memoirix, meet } from "@/assets/images/index";

export const skills = [
  {
    icon: HTML,
    name: "HTML",
    type: "Frontend",
  },
  {
    icon: CSS,
    name: "CSS",
    type: "Frontend",
  },
  {
    icon: JS,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    icon: TS,
    name: "Typescript",
    type: "Frontend",
  },
  {
    icon: PY,
    name: "Python",
    type: "Backend",
  },
  {
    icon: NodeJS,
    name: "Node.js",
    type: "Backend",
  },
  {
    icon: ReactJS,
    name: "React",
    type: "Frontend",
  },
  {
    icon: TailwindCSS,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const projects = [
  {
    image: mern,
    name: "Notes App",
    description: "Aplikasi catatan sederhana yang dibuat pakai MERN stack (MongoDB, Express.js, React.js, Node.js)",
    link: "https://notes-app.nizaralghifary.my.id/",
    download: "/downloads/Notes.apk",
    code: "https://github.com/nizaralghifary/mern-notes-app",
  },
  {
    image: terminal,
    name: "Terminal",
    description: "Portfolio berbentuk terminal",
    link: "https://terminal.nizaralghifary.my.id/",
    code: "https://github.com/nizaralghifary/terminal-portfolio",
  },
  {
    image: memoirix,
    name: "Memoirix",
    description: "Aplikasi catatan dengan banyak fitur dibuat dengan Next.js",
    link: "https://memoirix.nizaralghifary.my.id/",
    download: "/downloads/Memoirix.apk",
  },
  {
    image: meet,
    name: "Quantum Meet",
    description: "Aplikasi konferensi video seperti Zoom (Zoom Clone) dibuat dengan Next.js",
    link: "https://meet.nizaralghifary.my.id/",
    download: "/downloads/QuantumMeet.apk",
  },
];