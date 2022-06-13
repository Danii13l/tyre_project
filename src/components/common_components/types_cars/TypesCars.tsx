import { FC } from "react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import styles from "./typesCars.module.scss";

import car_light from "../../../images/fake_photo/types_light.png";
import car_cargo from "../../../images/fake_photo/types_cargo.png";

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
    img: car_light,
  },
  {
    id: 2,
    href: "#!",
    name: "Грузовые шины",
    name2: "Грузовые",
    img: car_cargo,
  },
  {
    id: 3,
    href: "#!",
    name: "Шины для Спецтехники",
    name2: "Спецтехника",
    img: car_cargo,
  },
];

export const TypesCars = ({ isBig }: typesCarsInt): JSX.Element => {
  const activeInd = !isBig ? 1 : 0;
  return (
    <div>
      <div className={`${styles.items_wrapper} ${isBig ? styles.big : ""}`}>
        {links.map(({ id, href, name, img, name2 }) => {
          return (
            <Link href={href} key={id}>
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
