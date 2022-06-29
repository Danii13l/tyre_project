import { FC } from "react";

import styles from "../account.module.scss";

interface smsInt {
  done?: boolean;
}

export const Sms: FC<smsInt> = ({ done }): JSX.Element => {
  return (
    <p className={styles.sms}>
      {done && "На указанный номер отправлено СМС с паролем для входа!"}
      {!done && "На указанный номер будет отправлено СМС с паролем для входа!"}
    </p>
  );
};
