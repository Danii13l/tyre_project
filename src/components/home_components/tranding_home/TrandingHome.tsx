import Image from "next/image";
import React from "react";
import { Container } from "../../common_components/container/Container";
import { LinkTo } from "../../common_components/LinkTo/LinkTo";

import styles from "./tranding.module.scss";

import mich from "../../../images/fake_photo/michelin.jpg";
import brid from "../../../images/fake_photo/bridgestone.jpg";
import { Darkening } from "../../common_components/darkening/Darkening";

const fakeData = [
  { id: 1, href: "#!", text: "Шины MICHELIN", img: mich },
  { id: 2, href: "#!", text: "Шины BRIDGESTONE", img: brid },
];

export const TrandingHome = () => {
  return (
    <div className={styles.tranding}>
      <Container>
        <div className={styles.tranding_inner}>
          {fakeData.map(({ id, href, text, img }) => {
            return (
              <div key={id}>
                <Darkening>
                  <p className={styles.title}>{text}</p>
                  <LinkTo
                    href={href}
                    y="small"
                    x="right"
                    text="КУПИТЬ СЕЙЧАС"
                  />
                  <Image src={img} alt="car" layout="fill" objectFit="cover" />
                </Darkening>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
