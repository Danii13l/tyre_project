import { FC } from "react";

import { Container } from "../container/Container";
import { NavLink } from "../navlink/Navlink";
import { Language } from "./language_select/Language";

import Link from "next/link";
import Image from "next/image";

import styles from "./header.module.scss";

import logo from "../../../images/common/logo.svg";
import search from "../../../images/navbar/search.svg";
import grocery from "../../../images/navbar/local-grocery-store.svg";

import {
  topNavbarLinks,
  bottomNavbarLinks,
} from "../../../constants/constHeader";

export const Header: FC = (): JSX.Element => {
  return (
    <header>
      <nav className={styles.navbar}>
        <Container>
          <div className={styles.navbar_inner}>
            <div className={styles.navbar_left_side}>
              <Link href="/" passHref>
                <a className={styles.logo}>
                  <Image src={logo} alt="logo" />
                </a>
              </Link>
              <form>
                <div className={styles.input_wrapper}>
                  <input type="text" />
                  <div className={styles.img_box}>
                    <Image
                      src={search}
                      alt="search"
                      layout="fill"
                      className={styles.input_img}
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className={styles.navbar_right_side}>
              <div className={styles.links_box}>
                <div className={styles.language_and_links}>
                  <Language />
                  <ul className={styles.top_navbar_link}>
                    {topNavbarLinks.map((links) => {
                      return (
                        <li key={links.name}>
                          <NavLink href={links.href} exact={false}>
                            {links.name}
                          </NavLink>
                        </li>
                      );
                    })}
                    <li>
                      <NavLink href="/account" exact={false}>
                        Аккаунт
                      </NavLink>
                    </li>
                    <li>
                      <Link href="/cabinet" passHref>
                        <a className={styles.cabinet}>
                          <div className={styles.cabinet_img_wrapper}>
                            <Image
                              src={"/avatar.png"}
                              alt="user"
                              layout="fill"
                            />
                          </div>

                          <span className={styles.cabinet_name}>Umid H.</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <ul className={styles.bottom_navbar_link}>
                  {bottomNavbarLinks.map((links) => {
                    return (
                      <li key={links.name}>
                        <NavLink href={links.href} exact={true}>
                          {links.name}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className={styles.price_box}>
                <Image src={grocery} alt="local-grocery-store" />
                <p className={styles.price}>1 400 000</p>
                <p>сум</p>
                <div className={styles.price_amount}>
                  <span>2</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};
