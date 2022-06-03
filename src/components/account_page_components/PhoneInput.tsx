import React from "react";

import styles from "./accountComp.module.scss";
import { InputPrimary } from "./../common_components/input/InputPrimary";

interface PhoneInputInt {
  sms: boolean;
  changeNumber: (ev: any) => void;
  valueNumber: string;
}

export const PhoneInput = ({
  sms,
  changeNumber,
  valueNumber,
}: PhoneInputInt) => {
  return (
    <>
      <div className={styles.input_wrapper}>
        <label htmlFor="tel">Введите номер телефона </label>
        <InputPrimary type="tel" name="tel" />
        <p className={styles.error}>Неверный формат</p>
      </div>

      {sms && (
        <div className={styles.sms}>
          На указаный номер будет отправлен SMS с паролем для входа !
        </div>
      )}
    </>
  );
};
