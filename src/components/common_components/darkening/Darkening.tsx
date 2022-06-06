import styles from "./darkening.module.scss";
import React from "react";

interface darkInt {
  children: React.ReactNode;
}

export const Darkening = ({ children }: darkInt): JSX.Element => {
  return <div className={styles.dark}>{children}</div>;
};
