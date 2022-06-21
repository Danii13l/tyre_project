import styles from "./listView.module.scss";

import Image, { StaticImageData } from "next/image";

import { Rating } from "../../../common_components/rating/Rating";
import { SeasonCountry } from "../../../common_components/season_country/SeasonCountry";

import frame from "../../../../images/common/big_card_frame.svg";

import { FC } from "react";

interface dataInt {
  id: number;
  title: string;
  size: string;
  countryImg: string | StaticImageData;
  countryName: string;
  seasonName: string;
  seasonImg: string | StaticImageData;
  discount: number | null;
  isNew: boolean;
  mainImg: string | StaticImageData;
  rating: number;
  price: string;
  oldPrice?: string;
  newPrice?: string;
}

export const ListView: FC<any> = ({ data }): JSX.Element => {
  return (
    <>
      {data.map((item: any) => {
        return (
          <div key={item.id} className={styles.list}>
            <div className={styles.img_block}>
              <div className={styles.img_wrapper}>
                <Image src={item.mainImg} alt="product" layout="fill" />
              </div>

              {item.discount && (
                <p className={styles.discount}>{item.discount}% Скидка</p>
              )}
              {item.isNew && <p className={styles.new}>НОВИНКА</p>}

              <div className={styles.frame_wrapper}>
                <Image src={frame} alt="product" />
              </div>
            </div>

            <div className={styles.content}>
              <Rating num={3} />
              <h4 className={styles.title_product}>{item.title}</h4>
              <p className={styles.size_product}>{item.size}</p>
              <div className={styles.season_wrapper}>
                <SeasonCountry
                  text={item.countryName}
                  img={item.countryImg}
                  country
                />
                <SeasonCountry text={item.seasonName} img={item.seasonImg} />
              </div>

              <p className={styles.price}>
                <span>{item.oldPrice}</span>
                {item.newPrice} сум
              </p>
            </div>

            <div className={styles.actions}>
              <div className={styles.actions_item}>
                <div className={styles.actions_img_wrapper}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08ZM18 4C18.55 4 19 4.45 19 5C19 5.55 18.55 6 18 6C17.45 6 17 5.55 17 5C17 4.45 17.45 4 18 4ZM6 13C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11C6.55 11 7 11.45 7 12C7 12.55 6.55 13 6 13ZM18 20.02C17.45 20.02 17 19.57 17 19.02C17 18.47 17.45 18.02 18 18.02C18.55 18.02 19 18.47 19 19.02C19 19.57 18.55 20.02 18 20.02Z" />
                  </svg>
                </div>
                <span>Поделиться</span>
              </div>
              <div className={styles.actions_item}>
                <div className={styles.actions_img_wrapper}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.66 3.98998C17.02 2.18998 13.76 3.02998 12 5.08998C10.24 3.02998 6.97997 2.17998 4.33997 3.98998C2.93997 4.94998 2.05997 6.56998 1.99997 8.27998C1.85997 12.16 5.29997 15.27 10.55 20.04L10.65 20.13C11.41 20.82 12.58 20.82 13.34 20.12L13.45 20.02C18.7 15.26 22.13 12.15 22 8.26998C21.94 6.56998 21.06 4.94998 19.66 3.98998ZM12.1 18.55L12 18.65L11.9 18.55C7.13997 14.24 3.99997 11.39 3.99997 8.49998C3.99997 6.49998 5.49997 4.99998 7.49997 4.99998C9.03997 4.99998 10.54 5.98998 11.07 7.35998H12.94C13.46 5.98998 14.96 4.99998 16.5 4.99998C18.5 4.99998 20 6.49998 20 8.49998C20 11.39 16.86 14.24 12.1 18.55Z" />
                  </svg>
                </div>
                <span>В Избранное</span>
              </div>

              <button type="button" className={styles.add_btn}>
                В корзину
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
