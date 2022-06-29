import { FC, useState } from "react";
import Image from "next/image";

import { InputInt } from "../../../interfaces/inputInterface";

import open_eye from "../../../images/icons/open_eye.svg";
import closed_eye from "../../../images/icons/closed_eye.svg";

import styles from "./input.module.scss";

export const PasswordInput: FC<InputInt> = ({
  name,
  labelText,
  onChange,
  onBlur,
  value,
  isError,
  isTouched,
}): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <>
      {labelText && <label className={styles.label}>{labelText}</label>}
      <div className={styles.input_password_wrapper}>
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          className={`${styles.input} ${
            isError && isTouched ? styles.errorInput : ""
          }`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {showPassword ? (
          <span className={styles.img_password_wrapper}>
            <Image
              src={open_eye}
              onClick={() => setShowPassword(!showPassword)}
              alt="eye"
              layout="fill"
            />
          </span>
        ) : (
          <span className={styles.img_password_wrapper}>
            <Image
              src={closed_eye}
              onClick={() => setShowPassword(!showPassword)}
              alt="eye"
              layout="fill"
            />
          </span>
        )}
      </div>
      {isError && isTouched && <p className={styles.error}>{isError}</p>}
    </>
  );
};
