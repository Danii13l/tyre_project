import { useCallback, useState } from "react";
import { NextPage } from "next";

import { Container } from "../src/components/common_components/container/Container";
import { ButtonsLeft } from "../src/components/cabinet_components/buttons_left/ButtonsLeft";
import { Settings } from "../src/components/cabinet_components/setting/Settings";
import { History } from "./../src/components/cabinet_components/history/History";
import { Orders } from "./../src/components/cabinet_components/orders/Orders";

import styles from "../styles/pages/cabinet/cabinet.module.scss";

import ava from "../public/avatar.png";
import history_pay from "../src/images/icons/history_pay.svg";
import orders from "../src/images/icons/online_orders.svg";
import exit from "../src/images/icons/exit.svg";

const buttons = [
  {
    id: 1,
    text: ["Umid Hikmatov", "+998 (90) 900-90-90"],
    type: "button",
    img: ava,
  },
  { id: 2, text: ["История платежей"], type: "button", img: history_pay },
  { id: 3, text: ["Онлайн заказы"], type: "button", img: orders },
  { id: 4, text: ["Выйти"], type: "link", img: exit },
];

const Cabinet: NextPage = (): JSX.Element => {
  const [activeMenu, setActivePage] = useState<number>(1);

  const changeActiveMenu = useCallback((id: number): (() => void) => {
    return (): void => setActivePage(id);
  }, []);

  return (
    <section>
      <Container>
        <div className={styles.cabinet_inner}>
          <div className={styles.cabinet_left_side}>
            {buttons.slice(0, 1).map(({ text, img, id, type }) => {
              return (
                <ButtonsLeft
                  key={id}
                  type={type}
                  img={img}
                  text={text}
                  id={id}
                  changePage={changeActiveMenu(id)}
                  isActive={id === activeMenu}
                  mainBtn
                />
              );
            })}

            {buttons.slice(1).map(({ text, img, id, type }) => {
              return (
                <ButtonsLeft
                  key={id}
                  type={type}
                  img={img}
                  text={text}
                  id={id}
                  isActive={id === activeMenu}
                  changePage={changeActiveMenu(id)}
                />
              );
            })}
          </div>
          <div className={styles.cabinet_right_side}>
            {activeMenu === 1 && <Settings />}
            {activeMenu === 2 && <History />}
            {activeMenu === 3 && <Orders />}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cabinet;
