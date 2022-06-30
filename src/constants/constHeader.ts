interface navbarLinks {
  href: string;
  name: string;
}

export const topNavbarLinks: navbarLinks[] = [
  { href: "/favourite", name: "Избранное" },
  { href: "/shopping_cart", name: "Корзина" },
];

export const bottomNavbarLinks: navbarLinks[] = [
  { href: "/", name: "Главная" },
  { href: "/products", name: "Каталог" },
  { href: "/news", name: "Новости" },
  { href: "/about", name: "О нас" },
  { href: "/contacts", name: "Контакты" },
];
