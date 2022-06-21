import { FC } from "react";
import styles from "./accountComp.module.scss";

interface AccountButtonInt {
  typebtn: "submit" | "reset" | "button";
  text: string;
  style: string;
  onClick?: () => void;
}

export const AccountButton: FC<AccountButtonInt> = ({
  typebtn,
  text,
  style,
  onClick,
}): JSX.Element => {
  return (
    <button type={typebtn} className={styles[style]} onClick={onClick}>
      {text}
    </button>
  );
};
