import Link from "next/link";
import Image from "next/image";

import { FC } from "react";

interface Props {
  color: string;
  y: string;
  x: string;
  text: string;
  href: string;
}

import styles from "./linkTo.module.scss";

import arrow_grey from "../../../images/linkTo/Pagination__navigation-grey.svg";
import arrow_white from "../../../images/linkTo/Pagination__navigation-white.svg";

export const LinkTo = ({ href, color, y, x, text }: Props) => {
  return (
    <Link href={href}>
      <a
        className={`${styles.link_to} ${styles[y]} ${styles[x]} ${styles[color]}`}
      >
        {text}
        <span>
          <Image src={color === "grey" ? arrow_grey : arrow_white} alt="icon" />
        </span>
      </a>
    </Link>
  );
};
