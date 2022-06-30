import { FC } from "react";

import NumberFormat from "react-number-format";

import { InputInt } from "../../../interfaces/inputInterface";

import styles from "./input.module.scss";

export const PhoneInput: FC<InputInt> = ({
  name,
  labelText,
  onChange,
  onBlur,
  isError,
  isTouched,
}): JSX.Element => {
  return (
    <>
      {labelText && <label className={styles.label}>{labelText}</label>}
      <div className={`${styles.input_number_wrapper}`}>
        <NumberFormat
          type="tel"
          format="(##) ###-##-##"
          mask="_"
          className={`${styles.input} ${
            isError && isTouched ? styles.errorInput : ""
          }`}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={"__ ___ __ __"}
          autoComplete="on"
        />
        <div>+998</div>
      </div>

      {isError && isTouched && <p className={styles.error}>{isError}</p>}
    </>
  );
};
