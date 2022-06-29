import { FC } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import styles from "./navlink.module.scss";

interface navlinkProps {
  href: string;
  exact: boolean;
  children: any;
}

export const NavLink: FC<navlinkProps> = ({
  href,
  exact,
  children,
  ...props
}): JSX.Element => {
  const { pathname } = useRouter();

  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href} passHref>
      <a {...props} className={isActive ? styles.link : ""}>
        {children}
      </a>
    </Link>
  );
};
