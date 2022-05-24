import { useRouter } from "next/router";
import Link from "next/link";

import styles from "./navlink.module.scss";

interface navlinkProps {
  href: string;
  exact: boolean;
  children: any;
}

export const NavLink = ({ href, exact, children, ...props }: navlinkProps) => {
  const { pathname } = useRouter();

  console.log(pathname);

  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href}>
      <a {...props} className={isActive ? styles.link : ""}>
        {children}
      </a>
    </Link>
  );
};
