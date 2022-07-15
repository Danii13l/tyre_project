import { FC } from "react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import styles from "./typesCars.module.scss";

interface typesCarsInt {
  isBig: boolean;
}

interface linksInt {
  id: number;
  href: string;
  name: string;
  name2: string;
  img: string | StaticImageData;
}

const links: linksInt[] = [
  {
    id: 1,
    href: "#!",
    name: "Легковые шины",
    name2: "Легковые",
    img: "/images/types_cars/types_light.png",
  },
  {
    id: 2,
    href: "#!",
    name: "Грузовые шины",
    name2: "Грузовые",
    img: "/images/types_cars/types_cargo.png",
  },
  {
    id: 3,
    href: "#!",
    name: "Шины для Спецтехники",
    name2: "Спецтехника",
    img: "/images/types_cars/types_cargo.png",
  },
];

export const TypesCars: FC<typesCarsInt> = ({ isBig }): JSX.Element => {
  const activeInd = !isBig ? 1 : 0;
  return (
    <div>
      <div className={`${styles.items_wrapper} ${isBig ? styles.big : ""}`}>
        {links.map(({ id, href, name, img, name2 }) => {
          return (
            <Link href={href} key={id} passHref>
              <a
                className={`${styles.link} ${
                  activeInd === id ? styles.active : ""
                }`}
              >
                <span className={styles.img_wrapper}>
                  <Image
                    src={img}
                    alt="logo"
                    width={isBig ? 100 : 60}
                    height={isBig ? (id === 1 ? 63 : 75) : id === 1 ? 38 : 45}
                  />
                </span>
                {isBig ? name : name2}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
