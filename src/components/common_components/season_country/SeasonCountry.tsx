import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import styles from "./seasonCountry.module.scss";

interface SeasCounInt {
  text: string;
  img: string | StaticImageData;
  big?: boolean;
  country?: boolean;
}

export const SeasonCountry = ({
  text,
  img,
  big,
  country,
}: SeasCounInt): JSX.Element => {
  const widthCountry = big && country ? 28 : !big && country ? 23 : 23;
  const heightCountry = big && country ? 20 : !big && country ? 16 : 16;
  const season = big && !country ? 24 : !big && !country ? 18 : 18;

  return (
    <div className={`${styles.wrapper} ${big ? styles.big : ""}`}>
      <Image
        src={img}
        alt="country"
        width={country ? widthCountry : season}
        height={country ? heightCountry : season}
      />
      <span>{text}</span>
    </div>
  );
};
