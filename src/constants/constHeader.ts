interface navbarLinks {
  href: string;
  name: string;
}

export const topNavbarLinks: navbarLinks[] = [
  { href: "!#", name: "Избранное" },
  { href: "/shopping_card", name: "Покупки" },
  { href: "/account", name: "Аккаунт" },
];

export const bottomNavbarLinks: navbarLinks[] = [
  { href: "/", name: "Главная" },
  { href: "/products", name: "Товары" },
  { href: "!#", name: "Новости" },
  { href: "!#", name: "О нас" },
  { href: "!#", name: "Контакты" },
];
