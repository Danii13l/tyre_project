import Link from "next/link";
import { FC, useState } from "react";

import { CustomSelect } from "../../common_components/custom_select/CustomSelect";

import styles from "./formPayment.module.scss";

const fakeoptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const fakeProducts = [
  {
    id: 1,
    name: "Marvelous Modern 3 Seater",
    quantity: 2,
    total: "212 122",
  },
  {
    id: 2,
    name: "Marvelous Modern 3 Seater",
    quantity: 2,
    total: "3 212 122",
  },
  {
    id: 3,
    name: "Marvelous Modern 3 Seater",
    quantity: 3,
    total: "1 222 122",
  },
];

const fakePayment = [
  {
    id: 1,
    title: "DIRECT BANK TRANSFER",
    text: "Make your payment directly into our bank account. Please use your order id as the payment reference. Your order wont be shippided until the funds have cleared in our account",
  },
  {
    id: 2,
    title: "CHEQUE PAYMENT",
    text: "Make your payment directly into our bank account. Please use your order id as the payment reference. Your order wont be shippided until the funds have cleared in our account",
  },
  {
    id: 3,
    title: "PAYPAL",
    text: "Make your payment directly into our bank account. Please use your order id as the payment reference. Your order wont be shipp",
  },
];

export const FormPayment: FC = (): JSX.Element => {
  const [payMethod, setPayMethod] = useState<number | string>(0);

  const showPayMethod = (ev: any): void => {
    setPayMethod(ev.target.id);
  };

  return (
    <div className={styles.form_payment}>
      <form className={styles.form}>
        <div className={styles.inputs_wrapper}>
          <input placeholder="Name" className={styles.input} />
          <input placeholder="Last Name" className={styles.input} />
        </div>

        <input placeholder="Company Name" className={styles.input} />

        <textarea placeholder="Address" className={styles.textarea}></textarea>
        <input placeholder="Town/City" className={styles.input} />
        <input placeholder="State/Country" className={styles.input} />
        <input placeholder="Postcode/Zip" className={styles.input} />

        <div className={styles.inputs_wrapper}>
          <input
            type="email"
            className={styles.input}
            placeholder="Email address"
          />
          <input
            type="tel"
            className={styles.input}
            placeholder="Phone Number"
          />
        </div>

        <div className={styles.checkbox_wrapper}>
          <input type="checkbox" className={styles.checkbox} />
          Ship to a different address?
        </div>

        <textarea
          placeholder="Order Notes"
          className={styles.textarea}
        ></textarea>
      </form>

      <div className={styles.confirmation}>
        <div className={styles.payment}>
          <div className={styles.payment_items}>
            <h4>Your Order</h4>

            <div className={styles.total_wrapper}>
              <div className={styles.total_items}>
                <p>Products</p>
                <p>Total</p>
              </div>

              {/* ordered products */}
              {fakeProducts.map((item) => {
                return (
                  <div key={item.id} className={styles.total_items}>
                    <div className={styles.total_items_product}>
                      <p>{item.name} </p>
                      <span> x</span>
                      <p>{item.quantity}</p>
                    </div>
                    <p>{item.total} сум</p>
                  </div>
                );
              })}

              <h5 className={styles.total_price}>
                Total Price: <span>3 222 222 сум</span>
              </h5>
            </div>
          </div>

          <div className={styles.payment_items}>
            <h4>Payment </h4>

            {fakePayment.map((item) => {
              return (
                <div key={item.id} className={styles.payment_method_wrapper}>
                  <div
                    className={styles.payment_method_title}
                    onClick={showPayMethod}
                  >
                    <label htmlFor={String(item.id)}>{item.title}</label>
                    <input
                      type="radio"
                      name="paymethod"
                      className={styles.checkbox}
                      id={String(item.id)}
                    />
                  </div>

                  <div
                    className={`${styles.payment_method_text} ${
                      item.id == payMethod ? styles.activePay : ""
                    }`}
                    data-id={item.id}
                  >
                    {item.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className={styles.agree}>
            <label htmlFor="agree">
              I’ve read & accept the terms & conditions
            </label>
            <input type="checkbox" id="agree" />
          </div>
        </div>
      </div>
    </div>
  );
};
