import fbook from "../images/social/Facebook.svg";
import inst from "../images/social/Instagram.svg";
import tg from "../images/social/Telegram.svg";
import wapp from "../images/social/WhatsApp.svg";
import youtube from "../images/social/YouTube.svg";

interface socailArray {
  id: number;
  href: string;
  img: string;
}

export const social: socailArray[] = [
  { id: 1, href: "https://ru-ru.facebook.com/", img: fbook },
  { id: 2, href: "https://www.instagram.com/", img: inst },
  { id: 3, href: "https://web.telegram.org/k/", img: tg },
  { id: 4, href: "https://www.whatsapp.com/?lang=ru", img: wapp },
  { id: 5, href: "https://www.youtube.com/", img: youtube },
];
