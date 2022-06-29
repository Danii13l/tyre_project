import { FC } from "react";

import { useFormik, FormikProps } from "formik";

import { ButtonMain } from "../../../common_components/button_main/ButtonMain";
import { PasswordInput } from "../../../common_components/input/PasswordInput";

import styles from "../../account.module.scss";
import {
  confirmPasswordInt,
  confirmPasswordSchema,
} from "./../../validation/accountValidation";

export const ForgotPasswordThird: FC = (): JSX.Element => {
  const formik: FormikProps<confirmPasswordInt> = useFormik<confirmPasswordInt>(
    {
      initialValues: {
        password: "",
        confirmPassword: "",
      },
      validationSchema: confirmPasswordSchema,
      onSubmit: (values) => alert(values),
    }
  );
  return (
    <form className={styles.form}>
      <div className={styles.inputs_wrapper}>
        <div className={styles.input_wrapper}>
          <PasswordInput
            name="password"
            labelText="Введите новый пароль"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={formik.errors.password}
            isTouched={formik.touched.password}
          />
        </div>

        <PasswordInput
          name="confirmPassword"
          labelText="Подтвердите новый пароль"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isError={formik.errors.confirmPassword}
          isTouched={formik.touched.confirmPassword}
        />
      </div>

      <ButtonMain text="Сменить пароль" type="submit" />
    </form>
  );
};
