import { useState } from "react";

import Image from "next/image";

import { ChangeSettings } from "./setting_sub_components/ChangeSettings";
import { PayCard } from "./setting_sub_components/PayCard";
import { Address } from "./setting_sub_components/Address";

import styles from "./settings.module.scss";

const buttons = [
  { id: 1, text: "Личные данные", img: "/images/cabinet/personal_data.svg" },
  { id: 2, text: "Моя карта", img: "/images/cabinet/my_card.svg" },
  {
    id: 3,
    text: "Адрес доставки",
    img: "/images/cabinet/address_location.svg",
  },
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
