import { useState } from "react";

import Image from "next/image";

import { ChangeSettings } from "./setting_sub_components/ChangeSettings";
import { PayCard } from "./setting_sub_components/PayCard";
import { Address } from "./setting_sub_components/Address";

import styles from "./settings.module.scss";

import personal_data from "../../../images/icons/personal_data.svg";
import my_card from "../../../images/icons/my_card.svg";
import address from "../../../images/icons/address_location.svg";

const buttons = [
  { id: 1, text: "Личные данные", img: personal_data },
  { id: 2, text: "Моя карта", img: my_card },
  { id: 3, text: "Адрес доставки", img: address },
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
