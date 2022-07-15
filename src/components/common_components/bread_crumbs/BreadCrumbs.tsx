import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./breadCrumbs.module.scss";

interface BreadCrumbslist {
  id: number;
  href: string;
  text: string;
}

interface BreadCrumbsInt {
  list: BreadCrumbslist[];
  last: string;
}

export const BreadCrumbs: FC<BreadCrumbsInt> = ({
  list,
  last,
}): JSX.Element => {
  return (
    <div className={styles.bread_crumbs}>
      {list.map((item) => {
        return (
          <div key={item.id} className={styles.item}>
            <Link href={item.href} passHref>
              <a>{item.text}</a>
            </Link>
            <span className={styles.img_wrapper}>
              <Image
                src="/images/breadcrumb/bread_arrow.svg"
                alt="arrow"
                width={7}
                height={8}
              />
            </span>
          </div>
        );
      })}
      <span>{last}</span>
    </div>
  );
};
