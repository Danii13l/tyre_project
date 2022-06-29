import { FC } from "react";

import InputMask from "react-input-mask";

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
        <InputMask
          mask="(99) 999-99-99"
          className={`${styles.input} ${
            isError && isTouched ? styles.errorInput : ""
          }`}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={"__ ___ __ __"}
          // alwaysShowMask
        />
        <div>+998</div>
      </div>
      {isError && isTouched && <p className={styles.error}>{isError}</p>}
    </>
  );
};
