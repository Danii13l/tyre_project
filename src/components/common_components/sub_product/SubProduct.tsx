import Image, { StaticImageData } from "next/image";

import styles from "./subProduct.module.scss";

interface SubProductInt {
  img: StaticImageData | string;
  size: string;
  title: string;
  oldPrice: string;
  newPrice: string;
}

export const SubProduct = ({
  img,
  size,
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
        <h6 className={styles.sub_product_title}>{title}</h6>
        <p className={styles.sub_product_size}>{size}</p>

        <p className={styles.sub_product_price}>
          <span>{oldPrice}</span> {newPrice} сум
        </p>
      </div>
    </div>
  );
};
