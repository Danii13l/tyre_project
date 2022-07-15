import Link from "next/link";
import Image from "next/image";

import { FC, memo } from "react";

import { Container } from "../container/Container";
import { footerLinks } from "../../../constants/constFooter";
import { social } from "../../../constants/constSocial";

import styles from "./footer.module.scss";

export const Footer: FC = memo((): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_inner}>
          <div className={styles.footer_left_side}>
            <Link href="/" passHref>
              <a className={styles.logo}>
                <Image
                  src="/images/common/logo.svg"
                  alt="logo"
                  width={60}
                  height={25}
                />
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
                          <Link href={link.href} passHref>
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

          <div className={styles.footer_right_side}>
            <h4>Information</h4>

            <ul>
              <li>
                <p> Connaugt Road Central Suite 18B, 148 New Yankee</p>
                <span>
                  <Image
                    src="/images/footer/location-on.svg"
                    alt="icons"
                    width={18}
                    height={18}
                  />
                </span>
              </li>

              <li>
                <a href="tel:+15553332211"> +1 (555) 333 22 11</a>
                <span>
                  <Image
                    src="/images/footer/phone-enabled.svg"
                    alt="icons"
                    width={18}
                    height={18}
                  />
                </span>
              </li>

              <li>
                <a href="mailto:info@boomerang.store">info@boomerang.store</a>

                <span>
                  <Image
                    src="/images/footer/mail-outline.svg"
                    alt="icons"
                    width={18}
                    height={18}
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
});

Footer.displayName = "Footer";
