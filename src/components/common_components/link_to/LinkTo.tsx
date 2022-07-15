import Link from "next/link";
import Image from "next/image";

import { FC } from "react";

interface Props {
  y: string;
  x: string;
  text: string;
  href: string;
}

import styles from "./linkTo.module.scss";

export const LinkTo = ({ href, y, x, text }: Props) => {
  return (
    <Link href={href} passHref>
      <a className={`${styles.link_to} ${styles[y]} ${styles[x]}`}>
        {text}
        <span>
          <Image
            src="/images/link_to/Pagination__navigation-white.svg"
            alt="icon"
            width={24}
            height={24}
          />
        </span>
      </a>
    </Link>
  );
};
