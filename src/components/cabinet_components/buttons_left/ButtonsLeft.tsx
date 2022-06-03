import styles from "./buttonsLeft.module.scss";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Url } from "url";

interface buttonsInt {
  text: string[];
  img: StaticImageData | string;
  type: string;
  id: number;
  changePage: (id: number) => void;
}

export const ButtonsLeft = ({
  text,
  img,
  type,
  changePage,
  id,
}: buttonsInt) => {
  switch (type) {
    case "link":
      return (
        <Link href="/">
          <a className={styles.button}>
            <div className={styles.img_box}>
              <Image src={img} alt="icon" layout="fill" objectFit="cover" />
            </div>
            <p>{text}</p>
          </a>
        </Link>
      );

    case "button":
      return (
        <button
          type="button"
          className={styles.button}
          onClick={() => changePage(id)}
        >
          <div className={styles.img_box}>
            <Image src={img} alt="icon" layout="fill" objectFit="cover" />
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
