import { Url } from "url";

interface imagesArray {
  id: number;
  href: string | Url;
  img: string;
}

interface subLinks {
  href: string | Url;
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
];
