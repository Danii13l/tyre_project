import fbook from "../images/social/Facebook.svg";
import inst from "../images/social/Instagram.svg";
import tg from "../images/social/Telegram.svg";
import wapp from "../images/social/WhatsApp.svg";
import youtube from "../images/social/YouTube.svg";

import phone from "../images/footer/phone-enabled.svg";
import location from "../images/footer/location-on.svg";
import email from "../images/footer/mail-outline.svg";

interface imagesArray {
  id: number;
  href: string;
  img: string;
}

export const socialImages: imagesArray[] = [
  { id: 1, href: "#!", img: fbook },
  { id: 2, href: "#!", img: inst },
  { id: 3, href: "#!", img: tg },
  { id: 4, href: "#!", img: wapp },
  { id: 5, href: "#!", img: youtube },
];

interface subLinks {
  href: string;
  name: string;
  img?: any;
}

interface footerLinksArray {
  id: number;
  title: string;
  links: subLinks[];
}

export const footerLinks: footerLinksArray[] = [
  {
    id: 1,
    title: "Categories",
    links: [
      { href: "#!", name: "Chairs" },
      { href: "#!", name: "Sofas" },
      { href: "#!", name: "Living" },
      { href: "#!", name: "Bedroom" },
      { href: "#!", name: "Tables" },
      { href: "#!", name: "New" },
    ],
  },
  {
    id: 2,
    title: "Information",
    links: [
      { href: "#!", name: "About Us" },
      { href: "#!", name: "Contact Us" },
      { href: "#!", name: "Terms & Conditions" },
      { href: "#!", name: "Privacy Policy" },
      { href: "#!", name: "Customer Service" },
      { href: "#!", name: "FAQs" },
    ],
  },
  {
    id: 3,
    title: "Account",
    links: [
      { href: "#!", name: "My Account" },
      { href: "#!", name: "Order Tracking" },
      { href: "#!", name: "Wish List" },
      { href: "#!", name: "Shopping Cart" },
      { href: "#!", name: "Checkout" },
    ],
  },
  {
    id: 4,
    title: "Information",
    links: [
      {
        href: "",
        name: "Connaugt Road Central Suite 18B, 148  New Yankee",
        img: location,
      },
      { href: "tel:+15553332211", name: "+1 (555) 333 22 11", img: phone },
      {
        href: "mailto:info@boomerang.store",
        name: "info@boomerang.store",
        img: email,
      },
    ],
  },
];
