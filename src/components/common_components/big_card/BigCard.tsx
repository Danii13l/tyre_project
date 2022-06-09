import Image, { StaticImageData } from "next/image";
import styles from "./bigCard.module.scss";

import { Rating } from "../rating/Rating";
import { SeasonCountry } from "../season_country/SeasonCountry";

import seasonImg from "../../../images/fake_photo/seasons.svg";
import frame from "../../../images/common/big_card_frame.svg";

interface bigCardInt {
  id: number;
  title: string;
  size: string;
  countryImg: string | StaticImageData;
  countryName: string;
  seasonName: string;
  seasonImg: string | StaticImageData;
  discount: null | number;
  isNew: boolean;
  mainImg: string | StaticImageData;
  rating: number;
  price: string;
}

export const BigCard = ({
  id,
  title,
  size,
  countryImg,
  countryName,
  seasonName,
  seasonImg,
  discount,
  mainImg,
  isNew,
  rating,
  price,
}: bigCardInt) => {
  return (
    <div className={styles.big_card}>
      <div className={styles.big_card_top}>
        <h3 className={styles.title}>{title}</h3>
        <h5 className={styles.size}>{size}</h5>

        <div className={styles.country_season_wrapper}>
          <SeasonCountry text={countryName} img={countryImg} country />
          <SeasonCountry text={seasonName} img={seasonImg} />
        </div>
      </div>

      {discount && <p className={styles.discount}>{discount}% Скидка</p>}

      {isNew && <p className={styles.isNew}>НОВИНКА</p>}

      <div className={styles.main_img_wrapper}>
        <Image src={mainImg} alt="country" layout="fill" />
      </div>
      <div className={styles.rating_price_wrapper}>
        <Rating num={rating} />
        <h6 className={styles.price}>{price} сум</h6>
      </div>

      <div className={styles.frame}>
        <Image src={frame} alt="country" />
      </div>
    </div>
  );
};
