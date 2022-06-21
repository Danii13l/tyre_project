interface navbarLinks {
  href: string;
  name: string;
}

export const topNavbarLinks: navbarLinks[] = [
  { href: "#!", name: "Избранное" },
  { href: "/shopping_card", name: "Покупки" },
];

export const bottomNavbarLinks: navbarLinks[] = [
  { href: "/", name: "Главная" },
  { href: "/products", name: "Каталог" },
  { href: "/news", name: "Новости" },
  { href: "/about", name: "О нас" },
  { href: "/contacts", name: "Контакты" },
];
