import Image, { StaticImageData } from "next/image";
import styles from "./bigCard.module.scss";

import { Rating } from "../rating/Rating";
import { SeasonCountry } from "../season_country/SeasonCountry";

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

      <div className={styles.addTo}>
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18ZM15.55 13C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C21.25 4.82 20.77 4 20.01 4H5.21L4.27 2H1V4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H19V15H7L8.1 13H15.55ZM6.16 6H18.31L15.55 11H8.53L6.16 6Z" />
          </svg>
          <span>В корзинку</span>
        </button>
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.66 3.98998C17.02 2.18998 13.76 3.02998 12 5.08998C10.24 3.02998 6.97997 2.17998 4.33997 3.98998C2.93997 4.94998 2.05997 6.56998 1.99997 8.27998C1.85997 12.16 5.29997 15.27 10.55 20.04L10.65 20.13C11.41 20.82 12.58 20.82 13.34 20.12L13.45 20.02C18.7 15.26 22.13 12.15 22 8.26998C21.94 6.56998 21.06 4.94998 19.66 3.98998ZM12.1 18.55L12 18.65L11.9 18.55C7.13997 14.24 3.99997 11.39 3.99997 8.49998C3.99997 6.49998 5.49997 4.99998 7.49997 4.99998C9.03997 4.99998 10.54 5.98998 11.07 7.35998H12.94C13.46 5.98998 14.96 4.99998 16.5 4.99998C18.5 4.99998 20 6.49998 20 8.49998C20 11.39 16.86 14.24 12.1 18.55Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
