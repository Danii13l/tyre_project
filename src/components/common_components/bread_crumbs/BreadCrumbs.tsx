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
          <>
            <Link href={item.href} key={item.id}>
              <a>{item.text}</a>
            </Link>
            <span className={styles.img_wrapper}>
              <Image src={arrow} alt="arrow" width={7} height={8} />
            </span>
          </>
        );
      })}
      <span>{last}</span>
    </div>
  );
};
