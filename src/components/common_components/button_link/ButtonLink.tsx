import Link from "next/link";
import styles from "./buttonLink.module.scss";

interface buttonLinkInt {
  href: string;
  text: string;
}

export const ButtonLink = ({ href, text }: buttonLinkInt) => {
  return (
    <Link href={href} passHref>
      <a className={styles.link}>{text}</a>
    </Link>
  );
};
