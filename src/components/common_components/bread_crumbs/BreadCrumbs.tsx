import Image from "next/image";
import Link from "next/link";

import styles from "./breadCrumbs.module.scss";

import arrow from "../../../images/common/bread.svg";

interface BreadCrumbslist {
  id: number;
  href: string;
  text: string;
}

interface BreadCrumbsInt {
  list: BreadCrumbslist[];
  last: string;
}

export const BreadCrumbs = ({ list, last }: BreadCrumbsInt) => {
  return (
    <div className={styles.bread_crumbs}>
      {list.map((item) => {
        return (
          <div key={item.id} className={styles.item}>
            <Link href={item.href} passHref>
              <a>{item.text}</a>
            </Link>
            <span className={styles.img_wrapper}>
              <Image src={arrow} alt="arrow" width={7} height={8} />
            </span>
          </div>
        );
      })}
      <span>{last}</span>
    </div>
  );
};
