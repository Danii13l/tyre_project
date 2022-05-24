import Image, { StaticImageData } from "next/image";
import { Rating } from "../rating/Rating";

import styles from "./subProduct.module.scss";

interface SubProductInt {
  img: StaticImageData | string;
  rating: number | null;
  title: string;
  oldPrice: string;
  newPrice: string;
}

export const SubProduct = ({
  img,
  rating,
  title,
  oldPrice,
  newPrice,
}: SubProductInt) => {
  return (
    <div className={styles.sub_product}>
      <div className={styles.sub_product_imgbox}>
        <Image src={img} alt="product" layout="fill" />
      </div>

      <div className={styles.sub_product_infobox}>
        <h6
          className={`${styles.sub_product_title} ${
            rating ? styles.sub_product_norating : ""
          }`}
        >
          {title}
        </h6>
        <div className={styles.sub_product_rating}>
          {rating && <Rating num={rating} />}
        </div>
        <p className={styles.sub_product_price}>
          <span>{oldPrice}</span> {newPrice} сум
        </p>
      </div>
    </div>
  );
};
