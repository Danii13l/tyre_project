import { FC } from "react";
import styles from "./container.module.scss";

import { StandardComponentProps } from "../../../interfaces/StandardComponentProps";

export const Container: FC<StandardComponentProps> = ({
  children,
}): JSX.Element => {
  return <div className={styles.container}>{children}</div>;
};
