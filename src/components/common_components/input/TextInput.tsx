import { FC } from "react";

import { InputInt } from "../../../interfaces/inputInterface";

import styles from "./input.module.scss";

export const TextInput: FC<InputInt> = ({
  name,
  value,
  labelText,
  onChange,
  onBlur,
  isError,
  isTouched,
}): JSX.Element => {
  return (
    <>
      {labelText && <label className={styles.label}>{labelText}</label>}
      <input
        type="text"
        name={name}
        className={`${styles.input} ${
          isError && isTouched ? styles.errorInput : ""
        }`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="on"
      />
      {isError && isTouched && <p className={styles.error}>{isError}</p>}
    </>
  );
};
