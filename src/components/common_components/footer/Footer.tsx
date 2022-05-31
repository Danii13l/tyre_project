import Link from "next/link";
import Image from "next/image";

import { FC } from "react";

import { Container } from "../container/Container";

import styles from "./footer.module.scss";

import logo from "../../../images/common/logo.svg";

import { footerLinks } from "../../../constants/constFooter";
import { social } from "../../../constants/constSocial";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_inner}>
          <div className={styles.footer_left_side}>
            <Link href="#!">
              <a className={styles.logo}>
                <Image src={logo} alt="logo" />
              </a>
            </Link>

            <p>
              Exercitation ullamco laboris nisi ut aliquip ex commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>

            <div className={styles.footer_social_wrapper}>
              {social.map((link, index) => {
                return (
                  <a href={link.href} key={link.id}>
                    <Image
                      src={link.img}
                      alt="social"
                      width="24px"
                      height="24px"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          <div className={styles.footer_center}>
            {footerLinks.slice(0, 3).map((item) => {
              return (
                <div key={item.id}>
                  <h4>{item.title}</h4>
                  {item.links.map((link, index) => {
                    return (
                      <ul key={index}>
                        <li>
                          <Link href={link.href}>
                            <a>{link.name}</a>
                          </Link>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {footerLinks.slice(3).map((item) => {
            return (
              <div key={item.id} className={styles.footer_right_side}>
                <h4>{item.title}</h4>
                {item.links.map((link, index) => {
                  return (
                    <ul key={index}>
                      <li>
                        <Link href={link.href}>
                          <a> {link.name}</a>
                        </Link>
                        <span>
                          <Image src={link.img} alt="icons" />
                        </span>
                      </li>
                    </ul>
                  );
                })}
              </div>
            );
          })}
        </div>
      </Container>
    </footer>
  );
};
