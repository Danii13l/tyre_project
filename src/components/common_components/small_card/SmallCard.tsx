import Image, { StaticImageData } from "next/image";
import styles from "./smallCard.module.scss";

import seasonImg from "../../../images/fake_photo/seasons.svg";
import { Rating } from "../rating/Rating";

interface smallCardInt {
  id: number;
  title: string;
  size: string;
  countryImg: string | StaticImageData;
  countryName: string;
  seasonName: string;
  discount: null | number;
  isNew: boolean;
  mainImg: string | StaticImageData;
  rating: number;
  price: string;
}

export const SmallCard = ({
  id,
  title,
  size,
  countryImg,
  countryName,
  seasonName,
  discount,
  mainImg,
  isNew,
  rating,
  price,
}: smallCardInt) => {
  return (
    <div className={styles.small_card}>
      <div className={styles.small_card_top}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.country_season_wrapper}>
          <div className={styles.country_wrapper}>
            <Image src={countryImg} alt="country" />
            <span>{countryName}</span>
          </div>
          <div className={styles.season_wrapper}>
            <Image src={seasonImg} alt="country" />
            <span>{seasonName}</span>
          </div>
        </div>
      </div>

      {discount && <p className={styles.discount}>{discount}% Скидка</p>}

      {isNew && <p className={styles.isNew}>НОВИНКА</p>}

      <div className={styles.image_price}>
        <div className={styles.circle_img}>
          <div className={styles.main_img_wrapper}>
            <Image src={mainImg} alt="country" layout="fill" />
          </div>
        </div>

        <div className={styles.rating_price_wrapper}>
          <h5 className={styles.size}>{size}</h5>
          <Rating num={rating} />
          <h6 className={styles.price}>{price} сум</h6>
        </div>
      </div>
    </div>
  );
};
