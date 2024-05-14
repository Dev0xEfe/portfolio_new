import FaceTime from "~/components/apps/FaceTime";
import Terminal from "~/components/apps/Terminal";
import Safari from "~/components/apps/Safari";
import Bear from "~/components/apps/Bear";
import VSCode from "~/components/apps/VSCode";

import type { AppsData } from "~/types";

const apps: AppsData[] = [
  {
    id: "launchpad",
    title: "Launchpad",
    desktop: false,
    img: "img/icons/finder.png"
  },
  {
    id: "bear",
    title: "Efe Can Adasal",
    desktop: true,
    show: true,
    width: 860,
    height: 500,
    img: "img/icons/settings.png",
    content: <Bear />
  },
  {
    id: "safari",
    title: "Safari",
    desktop: true,
    show: false,
    width: 1024,
    minWidth: 375,
    minHeight: 200,
    img: "img/icons/safari.png",
    content: <Safari />
  },
  {
    id: "vscode",
    title: "VSCode",
    desktop: true,
    show: false,
    img: "img/icons/vscode.png",
    content: <VSCode />
  },
  {
    id: "facetime",
    title: "FaceTime",
    desktop: true,
    show: false,
    img: "img/icons/facetime.png",
    height: 530,
    content: <FaceTime />
  },
  {
    id: "terminal",
    title: "Terminal",
    desktop: true,
    show: false,
    img: "img/icons/terminal.png",
    content: <Terminal />
  },
  {
    id: "email",
    title: "Mail",
    desktop: false,
    img: "img/icons/mail.png",
    link: "mailto:0xefe.eth@gmail.com"
  },
  {
    id: "github",
    title: "Github",
    desktop: false,
    img: "img/icons/github.png",
    link: "https://github.com/Dev0xEfe"
  },
  {
    id: "spotify",
    title: "Spotify",
    desktop: false,
    img: "img/icons/spotify.png",
    link: "https://open.spotify.com/user/11183468763?si=Fk9qbFwcQoWsLSeXfBVYyg"
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    desktop: false,
    img: "img/icons/linkedin.png",
    link: "https://www.linkedin.com/in/efe-can-adasal-495779140/"
  }
];

export default apps;
