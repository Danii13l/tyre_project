import Image from "next/image";

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
              src={
                num != null && item <= num
                  ? "/images/rating/rating-yellow.svg"
                  : "/images/rating/rating-grey.svg"
              }
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
