import styles from "./accountComp.module.scss";

interface AccountButtonInt {
  typebtn: "submit" | "reset" | "button";
  text: string;
  style: string;
  onClick?: () => void;
}

export const AccountButton = ({
  typebtn,
  text,
  style,
  onClick,
}: AccountButtonInt) => {
  return (
    <button type={typebtn} className={styles[style]} onClick={onClick}>
      {text}
    </button>
  );
};
