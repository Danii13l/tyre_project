import React from "react";
import { Container } from "../../common_components/container/Container";
import { LinkTo } from "../../common_components/LinkTo/LinkTo";

import styles from "./tranding.module.scss";

export const TrandingHome = () => {
  return (
    <div className={styles.tranding}>
      <Container>
        <div className={styles.tranding_inner}>
          <div>
            <LinkTo
              href="#!"
              color="grey"
              y="small"
              x="right"
              text="КУПИТЬ СЕЙЧАС"
            />
          </div>
          <div>
            <LinkTo
              href="#!"
              color="grey"
              y="small"
              x="right"
              text="КУПИТЬ СЕЙЧАС"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
