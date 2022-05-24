import Link from "next/link";

import { RiArrowRightSLine } from "react-icons/ri";

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

export const BreadCrumbs = ({ list, last }: BreadCrumbsInt) => {
  return (
    <div className={styles.bread_crumbs}>
      {list.map((item) => {
        return (
          <>
            <Link href={item.href} key={item.id}>
              <a>{item.text}</a>
            </Link>
            <span>
              <RiArrowRightSLine />
            </span>
          </>
        );
      })}
      <span>{last}</span>
    </div>
  );
};
