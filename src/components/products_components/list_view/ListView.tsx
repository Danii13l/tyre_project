import styles from "./listView.module.scss";
import { Rating } from "../../common_components/rating/Rating";

import Image from "next/image";

import { AiFillHeart } from "react-icons/ai";
import { VscArrowSwap } from "react-icons/vsc";

// <ProductCard
//   key={item.id}
//   text={item.text}
//   price={item.price}
//   rating={item.rating}
//   discount={item.discount}
//   isNew={item.new}
//   img={null}
// />

export const ListView = ({ data }: any) => {
  return (
    <div className={styles.list}>
      {data.map((item: any) => (
        <div key={item.id} className={styles.list_item}>
          <div className={styles.list_img_wrapper}>
            <Image src={item.img} layout="fill" alt="product" />
          </div>
          <div className={styles.list_info}>
            <p className={styles.list_title}>{item.text}</p>
            <h3>{item.price} сум</h3>
            <p className={styles.list_desc}>{item.desc}</p>
          </div>
          <div className={styles.list_actions}>
            <div className={styles.list_rating}>
              <Rating num={item.rating} /> Reviews ({item.reviews})
            </div>
            <button className={styles.list_add}>ADD TO CART</button>

            <button className={styles.list_action}>
              <AiFillHeart />
              <span>ADD TO WISHLIST</span>
            </button>
            <button className={styles.list_action}>
              <VscArrowSwap />
              <span>COMPARE</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
