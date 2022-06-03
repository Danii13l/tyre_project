import styles from "./settings.module.scss";

import image from "../../../images/slide_examples/slide1.jpg";
import Image from "next/image";
import { useState } from "react";
import { ChangeSettings } from "./setting_sub_components/ChangeSettings";
import { PayCard } from "./setting_sub_components/PayCard";
import { Address } from "./setting_sub_components/Address";

const buttons = [
  { id: 1, text: "Личные данные", img: image },
  { id: 2, text: "Моя карта", img: image },
  { id: 3, text: "Адрес доставки", img: image },
];

export const Settings = () => {
  const [activeBtn, setActiveBtn] = useState<number>(1);

  const changeActiveBtn = (id: number): void => {
    setActiveBtn(id);
  };
  return (
    <div className={styles.settings}>
      <div className={styles.top_buttons}>
        {buttons.map(({ id, text, img }) => (
          <button
            key={id}
            className={`${styles.button} ${
              id === activeBtn ? styles.active : ""
            }`}
            onClick={() => changeActiveBtn(id)}
          >
            <div className={styles.image_wrapper}>
              <Image src={img} alt="icons" layout="fill" />
            </div>

            <span>{text}</span>
          </button>
        ))}
      </div>
      <div className={styles.setting_inner}>
        {activeBtn === 1 && <ChangeSettings />}
        {activeBtn === 2 && <PayCard />}
        {activeBtn === 3 && <Address />}
      </div>
    </div>
  );
};
