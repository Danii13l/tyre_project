import { FC } from "react";

import { Container } from "./../../common_components/container/Container";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import styles from "./typesCars.module.scss";

import car_light from "../../../images/fake_photo/types_light.png";
import car_cargo from "../../../images/fake_photo/types_cargo.png";

interface linksInt {
  id: number;
  href: string;
  name: string;
  img: string | StaticImageData;
}

const links: linksInt[] = [
  { id: 1, href: "#!", name: "Легковые шины", img: car_light },
  { id: 2, href: "#!", name: "Грузовые шины", img: car_cargo },
  { id: 3, href: "#!", name: "Шины для Спецтехники", img: car_cargo },
];

export const TypesCars: FC = (): JSX.Element => {
  return (
    <div>
      <Container>
        <div className={styles.items_wrapper}>
          {links.map(({ id, href, name, img }) => {
            return (
              <Link href={href} key={id}>
                <a className={styles.link}>
                  <span className={styles.img_wrapper}>
                    <Image src={img} alt="logo" width={100} />
                  </span>
                  {name}
                </a>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
