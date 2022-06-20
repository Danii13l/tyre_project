import { FC } from "react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import styles from "./buttonsLeft.module.scss";

interface buttonsInt {
  text: string[];
  img: StaticImageData | string;
  type: string;
  id: number;
  changePage: (id: number) => void;
  mainBtn?: boolean;
  isActive: boolean;
}

export const ButtonsLeft: FC<buttonsInt> = ({
  text,
  img,
  type,
  changePage,
  id,
  mainBtn,
  isActive,
}): JSX.Element => {
  switch (type) {
    case "link":
      return (
        <Link href="/">
          <a className={styles.button}>
            <div className={styles.img_box}>
              <Image src={img} alt="icon" layout="fill" />
            </div>
            <p>{text}</p>
          </a>
        </Link>
      );

    case "button":
      return (
        <button
          type="button"
          className={`${styles.button} ${mainBtn ? styles.main : ""} ${
            isActive ? styles.active : ""
          }`}
          onClick={() => changePage(id)}
        >
          <div className={styles.img_box}>
            <Image src={img} alt="icon" layout="fill" />
          </div>
          <div>
            {text.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </button>
      );
  }
  return (
    <button type="button" className={styles.button}>
      <div></div>
    </button>
  );
};
