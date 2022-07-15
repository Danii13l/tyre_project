import { useState, createContext, useCallback, FC, memo } from "react";
import Image from "next/image";

import { Signin } from "./signin/Signin";
import { Login } from "./login/Login";
import { ForgotPassword } from "./forgotPassword/ForgotPassword";

import styles from "./account.module.scss";

export interface contextInt {
  chooseActiveBtn: (num: number, inOrForgot?: boolean) => void;
  handleAccount: (val: boolean) => () => void;
}

export const ContextActivebtn = createContext<contextInt | null>(null);

interface accountInt {
  account: boolean;
  handleAccount: (val: boolean) => () => void;
}

export const Account: FC<accountInt> = memo(
  ({ account, handleAccount }): JSX.Element => {
    const [activeBtn, setActiveBtn] = useState<number>(1);
    const [isSignInOrForgot, setIsSignInOrForgot] = useState<boolean>(true);

    const chooseActiveBtn = useCallback(
      (num: number, inOrForgot?: boolean): void => {
        setActiveBtn(num);
        inOrForgot !== undefined
          ? setIsSignInOrForgot(inOrForgot)
          : setIsSignInOrForgot((state) => state);
      },
      []
    );

    return (
      <>
        {account && (
          <div className={styles.account}>
            <div className={styles.account_inner}>
              <h3 className={styles.title}>Авторизация</h3>
              <p className={styles.text}>
                Авторизуйтесь что бы воспользоваться всеми функциями сайта
              </p>

              <div className={styles.account_forms}>
                <div className={styles.buttons_wrapper}>
                  {isSignInOrForgot ? (
                    <button
                      className={`${styles.button} ${
                        activeBtn === 1 ? styles.active : ""
                      }`}
                      onClick={() => chooseActiveBtn(1, true)}
                    >
                      <Image
                        src="/images/account/login.svg"
                        alt="icon"
                        width={28}
                        height={28}
                      />
                      <span>Войти</span>
                    </button>
                  ) : (
                    <button
                      className={`${styles.button} ${
                        activeBtn === 2 ? styles.active : ""
                      }`}
                      onClick={() => chooseActiveBtn(2)}
                    >
                      <Image
                        src="/images/account/login.svg"
                        alt="icon"
                        width={28}
                        height={28}
                      />
                      <span>Смена пароля</span>
                    </button>
                  )}
                  <button
                    className={`${styles.button} ${
                      activeBtn === 3 ? styles.active : ""
                    }`}
                    onClick={() => chooseActiveBtn(3)}
                  >
                    <Image
                      src="/images/account/sighin.svg"
                      alt="icon"
                      width={28}
                      height={28}
                    />
                    <span>Регистрация</span>
                  </button>
                </div>
                <ContextActivebtn.Provider
                  value={{ chooseActiveBtn, handleAccount }}
                >
                  {activeBtn === 1 && <Login />}
                  {activeBtn === 2 && <ForgotPassword />}
                  {activeBtn === 3 && <Signin />}
                </ContextActivebtn.Provider>
              </div>

              <div
                className={styles.close_account}
                onClick={handleAccount(false)}
              >
                <Image
                  src="/images/common/close_x.svg"
                  alt="close"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
);

Account.displayName = "Account";
