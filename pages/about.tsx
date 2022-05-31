import Image from "next/image";
import { BreadCrumbs } from "../src/components/common_components/bread_crumbs/BreadCrumbs";
import { Container } from "../src/components/common_components/container/Container";

import styles from "../styles/pages/about/about.module.scss";
import { social } from "../src/constants/constSocial";

const About = () => {
  return (
    <section>
      <Container>
        <BreadCrumbs
          list={[{ id: 1, href: "/", text: "Home" }]}
          last="About Us"
        />
        <h1 className={styles.title}>About US</h1>

        <div className={styles.info_box}>
          <h2 className={styles.subtitle}>WHO WE ARE?</h2>

          <p className={styles.text}>
            Morbi in erat malesuada, sollicitudin massa at, tristique nisl.
            Maecenas id eros scelerisque, vulputate tortor quis, efficitur arcu
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Umco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit sse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          </p>

          <p className={styles.text}>
            Fusce mattis nunc lacus, vulputate facilisis dui efficitur ut.
            Vestibulum sit amet metus euismod, condimentum lectus id, ultrices
            sem. Morbi in erat malesuada, sollicitudin massa at, Umco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit sse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat
          </p>
        </div>

        <div className={styles.social_wrapper}>
          <h3>Follow Us</h3>
          <div className={styles.social_box}>
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
      </Container>
    </section>
  );
};

export default About;
