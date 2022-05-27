import React from "react";

import styles from "./accountComp.module.scss";

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
        <div className={styles.input_number_wrapper}>
          <input
            maxLength={12}
            type="tel"
            value={valueNumber}
            onChange={changeNumber}
          />
          <div>+998</div>
        </div>
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
