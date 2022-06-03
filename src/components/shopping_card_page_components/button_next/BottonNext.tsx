import Link from "next/link";
import { Url } from "url";

import styles from "./buttonNext.module.scss";

interface bottonNextInt {
  href: Url | string;
  text: string;
}

export const BottonNext = ({ href, text }: bottonNextInt) => {
  return (
    <Link href={href}>
      <a className={styles.link}>{text}</a>
    </Link>
  );
};
