import Image from "next/image";

import star_grey from "../../../images/rating/rating-grey.svg";
import star_yellow from "../../../images/rating/rating-yellow.svg";

import styles from "./rating.module.scss";

interface ratingInt {
  num: number | null;
  style?: string;
}

export const Rating = ({ num, style }: ratingInt) => {
  const count: number[] = [1, 2, 3, 4, 5];

  return (
    <div>
      {count.map((item) => {
        return (
          <span key={item} className={styles.rating}>
            <Image
              src={num != null && item <= num ? star_yellow : star_grey}
              alt="rating"
              width={style ? 16 : 12}
              height={style ? 16 : 12}
            />
          </span>
        );
      })}
    </div>
  );
};
