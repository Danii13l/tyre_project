import styles from "./ShoppingCardSidebar.module.scss";

import image from "../../../images/slide_examples/chair.jpg";
import Image from "next/image";
import Link from "next/link";

const fakeData = [
  {
    id: 1,
    img: image,
    name: "Marvelous Modern 3 Seater",
    price: "300 000",
    quantity: 3,
  },
  {
    id: 2,
    img: image,
    name: "Marvelous Modern 3 Seater",
    price: "300 000",
    quantity: 3,
  },
  {
    id: 3,
    img: image,
    name: "Marvelous Modern 3 Seater",
    price: "300 000",
    quantity: 3,
  },

  {
    id: 4,
    img: image,
    name: "Marvelous Modern 3 Seater",
    price: "300 000",
    quantity: 3,
  },
  {
    id: 5,
    img: image,
    name: "Marvelous Modern 3 Seater",
    price: "300 000",
    quantity: 3,
  },
  {
    id: 6,
    img: image,
    name: "Marvelous Modern 3 Seater",
    price: "300 000",
    quantity: 3,
  },
  {
    id: 6,
    img: image,
    name: "Marvelous Modern 3 Seater",
    price: "300 000",
    quantity: 3,
  },

  {
    id: 6,
    img: image,
    name: "Marvelous Modern 3 Seater",
    price: "300 000",
    quantity: 3,
  },
  {
    id: 6,
    img: image,
    name: "Marvelous Modern 3 Seater",
    price: "300 000",
    quantity: 3,
  },
  {
    id: 6,
    img: image,
    name: "Marvelous Modern 3 Seater",
    price: "300 000",
    quantity: 3,
  },
  {
    id: 6,
    img: image,
    name: "Marvelous Modern 3 Seater",
    price: "300 000",
    quantity: 3,
  },
  {
    id: 6,
    img: image,
    name: "Marvelous Modern 3 Seater",
    price: "300 000",
    quantity: 3,
  },
  {
    id: 6,
    img: image,
    name: "Marvelous Modern 3 Seater",
    price: "300 000",
    quantity: 3,
  },
];

export const ShoppingCardSidebar = () => {
  return (
    <div className={styles.shopping_sidebar}>
      <div className={styles.shopping_inner}>
        <div className={styles.shopping_products}>
          {fakeData.map((item) => {
            return (
              <div key={item.id} className={styles.shopping_item}>
                <div className={styles.image_wrapper}>
                  <Image src={item.img} alt="product" layout="fill" />
                </div>
                <div className={styles.info_box}>
                  <p className={styles.product_name}>{item.name}</p>
                  <p className={styles.product_price}>{item.price} сум</p>
                  <p className={styles.product_quantity}>
                    Qty:<span>{item.quantity}</span>
                  </p>
                </div>
                <div className={styles.close}>x</div>
              </div>
            );
          })}
        </div>
        <div className={styles.shopping_total}>
          <p>Total:</p>
          <p>
            <span>2 000 000</span> сум
          </p>
        </div>
        <div className={styles.shopping_links}>
          <Link href="/shopping_card">
            <a>View card</a>
          </Link>

          <Link href="/shopping_card/checkout">
            <a>Checkout</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
