import { ChangeEvent, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";

import { Container } from "../src/components/common_components/container/Container";
import { PhoneInput } from "../src/components/account_page_components/PhoneInput";
import { AccountButton } from "../src/components/account_page_components/AccountButton";
import { InputPrimary } from "../src/components/common_components/input/InputPrimary";

import styles from "../styles/pages/account/account.module.scss";

const buttons = [
  { id: 1, text: "Войти" },
  { id: 2, text: "Регистрация" },
  { id: 3, text: "Изменить пороль" },
];

const Account: NextPage = (): JSX.Element => {
  const [activeButton, setActiveButton] = useState<number>(1);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [regOrChange, setRegOrChange] = useState<boolean>(false);
  const [number, setChangeNumber] = useState("");

  const toggleButton = (num: number) => {
    return () => setActiveButton(num);
  };

  const togglePasswort = () => {
    setShowPassword(!showPassword);
  };

  const cancleButton = () => {
    setActiveButton(1);
    setRegOrChange(false);
  };

  const forgotButton = () => {
    setActiveButton(3);
    setRegOrChange(true);
  };

  const handleNumber = (ev: ChangeEvent<HTMLInputElement>) => {
    setChangeNumber(ev.target.value);
  };

  return (
    <section className={styles.account}>
      <Container>
        <h1 className={styles.title}>LOGIN</h1>
        <p className={styles.subtitle}>
          Авторизуйтесь чтобы воспользоваться всеми функциями сайта.
        </p>

        <div className={styles.account_wrapper}>
          <div className={styles.toogle_wrapper}>
            {buttons.map((item, index) => {
              return (
                <button
                  type="button"
                  id={String(item.id)}
                  className={`${
                    activeButton === item.id ? styles.active : ""
                  } ${
                    index === 1 && regOrChange
                      ? styles.registr_btn
                      : index === 2 && !regOrChange
                      ? styles.change_password_button
                      : ""
                  }`}
                  onClick={toggleButton(item.id)}
                  key={item.id}
                >
                  {item.text}
                </button>
              );
            })}
          </div>

          <div className={styles.content}>
            <form
              name="signin"
              className={`${styles.signin_wrapper} ${
                activeButton === 1 ? styles.active : ""
              }`}
            >
              <PhoneInput
                sms={false}
                valueNumber={number}
                changeNumber={handleNumber}
              />
              <div className={styles.input_wrapper}>
                <InputPrimary
                  type="password"
                  name="password"
                  labelFor="password"
                  labelText="Пароль"
                />
                <p className={styles.error}>Обязательное поле</p>
              </div>

              <AccountButton
                typebtn="button"
                text="Забыли пароль?"
                style="forgot"
                onClick={forgotButton}
              />

              <AccountButton typebtn="button" text="Войти" style="submit" />
            </form>

            <form
              name="register"
              className={`${styles.register_wrapper} ${
                activeButton === 2 ? styles.active : ""
              } ${regOrChange ? styles.hide_register_wrapper : ""}`}
            >
              <PhoneInput
                sms={true}
                valueNumber={number}
                changeNumber={handleNumber}
              />
              <div className={styles.buttons_wrapper}>
                <AccountButton
                  typebtn="button"
                  text="Отмена"
                  style="cancel"
                  onClick={cancleButton}
                />
                <AccountButton
                  typebtn="button"
                  text="Зарегистрироваться"
                  style="submit"
                />
              </div>

              <p className={styles.agreement}>
                Регистрируясь на сайте вы принимаете условия
                <Link href="#!">
                  <a> пользовательского соглашения.</a>
                </Link>
              </p>
            </form>

            <form
              name="changePassword"
              className={`${styles.change_wrapper} ${
                activeButton === 3 ? styles.active : ""
              }  ${!regOrChange ? styles.hide_register_wrapper : ""}`}
            >
              <PhoneInput
                sms={true}
                valueNumber={number}
                changeNumber={handleNumber}
              />
              <div className={styles.buttons_wrapper}>
                <AccountButton
                  typebtn="button"
                  text="Отмена"
                  style="cancel"
                  onClick={cancleButton}
                />
                <AccountButton
                  typebtn="button"
                  text="Изменить"
                  style="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Account;
