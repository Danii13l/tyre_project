import { Container } from "../src/components/common_components/container/Container";

import styles from "../styles/pages/cabinet/cabinet.module.scss";

import image from "../src/images/slide_examples/a.jpg";
import { ButtonsLeft } from "../src/components/cabinet_components/buttons_left/ButtonsLeft";
import { useState } from "react";
import { Settings } from "../src/components/cabinet_components/setting/Settings";
import { History } from "./../src/components/cabinet_components/history/History";
import { Orders } from "./../src/components/cabinet_components/orders/Orders";

const buttons = [
  { id: 2, text: ["История платежей"], type: "button", img: image },
  { id: 3, text: ["Онлайн заказы"], type: "button", img: image },
  { id: 4, text: ["Выйти"], type: "link", img: image },
];

const Cabinet = () => {
  const [activePage, setActivePage] = useState(1);

  const changeActivePage = (id: number): void => {
    setActivePage(id);
  };
  return (
    <section>
      <Container>
        <div className={styles.cabinet_inner}>
          <div className={styles.cabinet_left_side}>
            <ButtonsLeft
              type={"button"}
              img={image}
              text={["Daniil", "+998 222 22 12"]}
              id={1}
              changePage={changeActivePage}
            />

            {buttons.map(({ text, img, id, type }) => {
              return (
                <ButtonsLeft
                  key={id}
                  type={type}
                  img={img}
                  text={text}
                  id={id}
                  changePage={changeActivePage}
                />
              );
            })}
          </div>
          <div className={styles.cabinet_right_side}>
            {activePage === 1 && <Settings />}
            {activePage === 2 && <History />}
            {activePage === 3 && <Orders />}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cabinet;
