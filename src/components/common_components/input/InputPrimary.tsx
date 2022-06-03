import styles from "./input.module.scss";
import { useState } from "react";

import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

interface InputInt {
  type: string;
  name: string;
  labelFor?: string;
  labelText?: string;
  placeh?: string;
}

export const InputPrimary = ({
  type,
  name,
  labelFor,
  labelText,
  placeh,
}: InputInt) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswort = (ev: any) => {
    setShowPassword(!showPassword);
  };
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
            <RiEyeLine onClick={togglePasswort} />
          ) : (
            <RiEyeCloseLine onClick={togglePasswort} />
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
