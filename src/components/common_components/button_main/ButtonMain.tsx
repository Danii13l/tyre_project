import Image, { StaticImageData } from "next/image";
import { FC } from "react";

import styles from "./buttonMain.module.scss";

interface BtnSubInt {
  text: string;
  type: "button" | "submit";
  img?: string | StaticImageData;
  second?: boolean;
  third?: boolean;
  onClick?: () => void;
}

export const ButtonMain: FC<BtnSubInt> = ({
  text,
  type,
  img,
  second,
  third,
  onClick,
}): JSX.Element => {
  return (
    <button
      type={type}
      className={`${styles.button} ${second ? styles.second : ""} ${
        third ? styles.third : ""
      }`}
      onClick={() => (onClick ? onClick() : null)}
    >
      {img && (
        <span>
          <Image src={img} alt="icon" layout="fill" />
        </span>
      )}
      {text}
    </button>
  );
};
