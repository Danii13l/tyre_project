import React from "react";
import { NextPage } from "next";

import { Container } from "../../src/components/common_components/container/Container";
import { BreadCrumbs } from "../../src/components/common_components/bread_crumbs/BreadCrumbs";

import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from "react-icons/ai";

import styles from "./contacts.module.scss";

const Contacts: NextPage = (): JSX.Element => {
  return (
    <section className={styles.contacts}>
      <Container>
        <BreadCrumbs
          list={[{ id: 1, href: "/", text: "Home" }]}
          last="Contact Us"
        />
        <h2 className={styles.title}>schön. chair maker</h2>
        <p className={styles.desc}>
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit sse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat
        </p>
      </Container>

      <div className={styles.contacts_wrapper}>
        <Container>
          <div className={styles.contacts_inner}>
            <div className={styles.contacts_item}>
              <AiFillEnvironment />
              <h4>Address</h4>
              <p>Suite 18B, 148 Connaught Road Central New Yankee</p>
            </div>

            <div className={styles.contacts_item}>
              <AiFillPhone />
              <h4>Phone</h4>
              <a href="tel:15553332211">+1 (555) 333 22 11</a>
            </div>

            <div className={styles.contacts_item}>
              <AiOutlineMail />
              <h4>E_MAIL</h4>
              <a href="mailto:info@schon.chair">info@schon.chair</a>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className={styles.question_answer}>
          <h4>Have a question?</h4>
          <p>
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            sse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        <form action="" className={styles.form}>
          <input className={styles.input} type="text" placeholder="Name" />
          <input className={styles.input} type="email" placeholder="E-Mail" />
          <input className={styles.input} type="text" placeholder="Subject" />
          <textarea
            className={styles.textarea}
            placeholder="Message"
          ></textarea>
          <button className={styles.button} type="button">
            Send
          </button>
        </form>

        <div className={styles.map}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A95f7a8315f2c3a64c50e506b44e4f27cd542a63c467d9bf3f59ac109e69fbcd0&amp;source=constructor"
            width="100%"
            height="400"
          ></iframe>
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
