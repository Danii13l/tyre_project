import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./ShoppingCardSidebar.module.scss";

import plus from "../../../images/icons/plus.svg";
import minus from "../../../images/icons/minus.svg";
import add_img from "../../../images/icons/add_to_card.svg";
import to_pay from "../../../images/icons/to_pay.svg";
import close from "../../../images/icons/close_x.svg";

import fakeImg from "../../../images/fake_photo/balloon2.png";
import { ButtonMain } from "../button_main/ButtonMain";

const fakeData = [
  {
    id: 1,
    img: fakeImg,
    name: "Pirelli Scorpion VerdeAll Season VerdeAll Season",
    price: "99 999 000",
    quantity: 3,
    size: "225/55R17",
    amount: 22,
  },
  {
    id: 2,
    img: fakeImg,
    name: "Pirelli Scorpion VerdeAll Season VerdeAll Season",
    price: "0",
    quantity: 3,
    size: "225/55R17",
    amount: 2,
  },
  {
    id: 3,
    img: fakeImg,
    name: "Pirelli Scorpion VerdeAll Season",
    price: "200 000",
    quantity: 3,
    size: "225/55R17",
    amount: 2,
  },

  {
    id: 4,
    img: fakeImg,
    name: "Marvelous Modern 3 SeaterVerdeAll Season",
    price: "1 900 000",
    quantity: 3,
    size: "225/55R17",
    amount: 2,
  },
  {
    id: 5,
    img: fakeImg,
    name: "Marvelous Modern 3 Seater",
    price: "3 000 000",
    quantity: 3,
    size: "225/55R17",
    amount: 2,
  },
  {
    id: 6,
    img: fakeImg,
    name: "Marvelous Modern 3 Seater",
    price: "34 000 000",
    quantity: 3,
    size: "225/55R17",
    amount: 2,
  },
  {
    id: 6,
    img: fakeImg,
    name: "Marvelous Modern 3 Seater",
    price: "21 000 000",
    quantity: 3,
    size: "225/55R17",
    amount: 2,
  },

  {
    id: 6,
    img: fakeImg,
    name: "Marvelous Modern 3 Seater",
    price: "3 000 000",
    quantity: 3,
    size: "225/55R17",
    amount: 2,
  },
  {
    id: 6,
    img: fakeImg,
    name: "Marvelous Modern 3 Seater",
    price: "3 000 000",
    quantity: 3,
    size: "225/55R17",
    amount: 2,
  },
  {
    id: 6,
    img: fakeImg,
    name: "Pirelli Scorpion VerdeAll Season",
    price: "3 000 000",
    quantity: 3,
    size: "225/55R17",
    amount: 2,
  },
  {
    id: 6,
    img: fakeImg,
    name: "Pirelli Scorpion VerdeAll Season",
    price: "3 000 000",
    quantity: 3,
    size: "225/55R17",
    amount: 2,
  },
  {
    id: 6,
    img: fakeImg,
    name: "Pirelli Scorpion VerdeAll Season",
    price: "3 000 000",
    quantity: 3,
    size: "225/55R17",
    amount: 2,
  },
  {
    id: 6,
    img: fakeImg,
    name: "Pirelli Scorpion VerdeAll Season",
    price: "3 000 000",
    quantity: 3,
    size: "225/55R17",
    amount: 2,
  },
];

export const ShoppingCardSidebar: FC = (): JSX.Element => {
  return (
    <div className={styles.shopping_sidebar}>
      <div className={styles.shopping_inner}>
        <h3 className={styles.title}>КОРЗИНА</h3>
        <div className={styles.shopping_products}>
          {fakeData.map((item) => {
            return (
              <div key={item.id} className={styles.shopping_item}>
                <div className={styles.image_wrapper}>
                  <Image src={item.img} alt="product" layout="fill" />
                </div>

                <div className={styles.text_wrapper}>
                  <h4 className={styles.item_title}>{item.name}</h4>
                  <p className={styles.item_size}>{item.size}</p>
                </div>

                <div className={styles.amount_wrapper}>
                  <p>Кол-во</p>
                  <div className={styles.amount_inner}>
                    <div className={styles.dec}>
                      <Image src={minus} alt="minus" />
                    </div>
                    <div className={styles.amount_number}>{item.amount}</div>
                    <div className={styles.inc}>
                      <Image src={plus} alt="plus" />
                    </div>
                  </div>
                </div>

                <div className={styles.price_wrapper}>
                  <p>{item.price} сум</p>
                  <span>Удалить</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.shopping_total}>
          <p>
            Общее количество: <span>{3}шт</span>
          </p>
          <p>
            Общая сумма: <span>{"100 000 000"} сум</span>
          </p>
        </div>
        <div className={styles.shopping_links}>
          <ButtonMain text="В корзину" type="button" img={add_img} second />

          <Link href="/">
            <a>
              <ButtonMain text="К оплате" type="button" img={to_pay} />
            </a>
          </Link>
        </div>

        <div className={styles.close}>
          <Image src={close} alt="close" layout="fill" />
        </div>
      </div>
    </div>
  );
};
