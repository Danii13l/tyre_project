import { Container } from "../container/Container";
import { NavLink } from "../navlink/Navlink";
import { Language } from "./../language_select/Language";

import Link from "next/link";
import Image from "next/image";

import styles from "./navbar.module.scss";

import logo from "../../images/navbar/logo.svg";
import search from "../../images/navbar/search.svg";
import grocery from "../../images/navbar/local-grocery-store.svg";

import { topNavbarLinks, bottomNavbarLinks } from "./../../constants/constants";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navbar_inner}>
          <div className={styles.navbar_left_side}>
            <a href="#!" className={styles.logo}>
              <Image src={logo} alt="logo" />
            </a>
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
                </ul>
              </div>

              <ul>
                {bottomNavbarLinks.map((links) => {
                  return (
                    <li key={links.name}>
                      <NavLink href={links.href} exact={false}>
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
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};
