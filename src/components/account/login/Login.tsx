import React, { FC, useContext } from "react";

import { useFormik, FormikProps } from "formik";

import { ButtonMain } from "../../common_components/button_main/ButtonMain";
import { PhoneInput } from "../../common_components/input/PhoneInput";
import { PasswordInput } from "../../common_components/input/PasswordInput";

import { ContextActivebtn, contextInt } from "./../Account";

import {
  phoneSPasswordInt,
  phoneSPasswordSchema,
} from "./../validation/accountValidation";

import styles from "../account.module.scss";

export const Login: FC = (): JSX.Element => {
  const { chooseActiveBtn, handleAccount } = useContext(
    ContextActivebtn
  ) as contextInt;

  const formik: FormikProps<phoneSPasswordInt> = useFormik<phoneSPasswordInt>({
    initialValues: {
      password: "",
      phone: "",
    },
    validationSchema: phoneSPasswordSchema,
    onSubmit: (values) => alert(values),
  });

  return (
    <form className={styles.form}>
      <div className={styles.inputs_wrapper}>
        <div className={styles.input_wrapper}>
          <PhoneInput
            name="phone"
            labelText="Введите номер телефона"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={formik.errors.phone}
            isTouched={formik.touched.phone}
            value={formik.values.phone}
          />
        </div>

        <PasswordInput
          name="password"
          labelText="Пароль"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isError={formik.errors.password}
          isTouched={formik.touched.password}
        />
        <p
          className={styles.forgot_password_text}
          onClick={() => chooseActiveBtn(2, false)}
        >
          Забыли пароль?
        </p>
      </div>

      <ButtonMain text="Войти" type="submit" />
    </form>
  );
};
