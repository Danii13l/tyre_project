import Image from "next/image";
import React from "react";
import { Container } from "../container/Container";
import { LinkTo } from "../link_to/LinkTo";

import styles from "./tranding.module.scss";

import mich from "../../../images/fake_photo/michelin.jpg";
import brid from "../../../images/fake_photo/bridgestone.jpg";
import { Darkening } from "../darkening/Darkening";

const fakeData = [
  { id: 1, href: "#!", text: "Шины MICHELIN", img: mich },
  { id: 2, href: "#!", text: "Шины BRIDGESTONE", img: brid },
];

export const Tranding = () => {
  return (
    <div className={styles.tranding}>
      <Container>
        <div className={styles.tranding_inner}>
          {fakeData.map(({ id, href, text, img }) => {
            return (
              <div key={id}>
                <p className={styles.title}>{text}</p>
                <LinkTo href={href} y="small" x="right" text="КУПИТЬ СЕЙЧАС" />
                <div className={styles.img_wrapper}>
                  <Image src={img} alt="car" layout="fill" objectFit="cover" />
                </div>
                <Darkening />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
