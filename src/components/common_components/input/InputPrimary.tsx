import { FC, useState } from "react";

import open_eye from "../../../images/icons/open_eye.svg";
import closed_eye from "../../../images/icons/closed_eye.svg";

import styles from "./input.module.scss";
import Image from "next/image";

interface InputInt {
  type: string;
  name: string;
  labelFor?: string;
  labelText?: string;
  placeh?: string;
}

export const InputPrimary: FC<InputInt> = ({
  type,
  name,
  labelFor,
  labelText,
  placeh,
}): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div>
      {labelFor && (
        <label htmlFor={labelFor} className={styles.label} placeholder={placeh}>
          {labelText}
        </label>
      )}

      {type !== "password" && type !== "tel" && (
        <input
          type={type}
          name={name}
          className={styles.input}
          id={labelFor}
          placeholder={placeh}
        />
      )}

      {type === "password" && (
        <div className={styles.input_password_wrapper}>
          <input
            type={showPassword ? "text" : "password"}
            name={name}
            className={styles.input}
            placeholder={placeh}
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
      )}

      {type === "tel" && (
        <div className={`${styles.input_number_wrapper}`}>
          <input
            maxLength={12}
            type="tel"
            className={styles.input}
            placeholder={placeh}
          />
          <div>+998</div>
        </div>
      )}

      {type === "textarea" && <textarea className={styles.textarea}></textarea>}
    </div>
  );
};
